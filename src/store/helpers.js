import { createActions } from "redux-actions";
import { of } from "rxjs";
import { ofType } from "redux-observable";
import { switchMap, map, catchError } from "rxjs/operators";

export const getAuthToken = (state) => state.value.auth.token;

export const createAsyncAction = (type) =>
  createActions(
    {
      REQUEST: (payload) => payload,
      SUCCESS: (payload) => payload,
      FAILURE: (error) => error,
    },
    {
      prefix: type,
      namespace: "_",
    }
  );

export const createEpic =
  (action, service, method, auth = false) =>
  (action$, state$, services) => {
    return action$.pipe(
      ofType(action.request().type),
      switchMap(({ payload }) => {
        return services[service][method](
          payload,
          auth ? getAuthToken(state$) : ""
        ).pipe(
          map(({ response }) => {
            return action.success(response);
          }),
          catchError(({ response }) => of(action.failure(response)))
        );
      })
    );
  };

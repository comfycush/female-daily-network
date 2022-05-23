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
        console.log("Call APi", services[service][method]());
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

// export const createDownloadEpic = (
//   action,
//   service,
//   method,
//   auth = false,
//   filename
// ) => (action$, state$, services) =>
//   action$.pipe(
//     ofType(action.request().type),
//     switchMap(({ payload }) =>
//       services[service][method](
//         payload,
//         auth ? getAuthToken(state$) : ''
//       )
//         .then(
//           (res) => {
//             fileDownload(res.data, `${filename}.xlsx`);
//             return action.success(res);
//           }
//           // catchError(({ response }) => of(action.failure(response)))
//         )
//         .catch((err) => of(action.failure(err)))
//     )
//   );

// export const createDownloadAsZipEpic = (
//   action,
//   service,
//   method,
//   auth = false,
//   filename
// ) => (action$, state$, services) =>
//   action$.pipe(
//     ofType(action.request().type),
//     switchMap(({ payload }) =>
//       services[service][method](
//         payload,
//         auth ? getAuthToken(state$) : ''
//       )
//         .then(
//           (res) => {
//             fileDownload(res.data, `${filename}.zip`);
//             return action.success(res);
//           }
//           // catchError(({ response }) => of(action.failure(response)))
//         )
//         .catch((err) => of(action.failure(err)))
//     )
//   );

// export const createDownloadAsCSVEpic = (
//   action,
//   service,
//   method,
//   auth = false,
//   filename
// ) => (action$, state$, services) =>
//   action$.pipe(
//     ofType(action.request().type),
//     switchMap(({ payload }) =>
//       services[service][method](
//         payload,
//         auth ? getAuthToken(state$) : ''
//       )
//         .then(
//           (res) => {
//             fileDownload(res.data, `${filename}.csv`);
//             return action.success(res);
//           }
//           // catchError(({ response }) => of(action.failure(response)))
//         )
//         .catch((err) => of(action.failure(err)))
//     )
//   );

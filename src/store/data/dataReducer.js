import { handleActions } from "redux-actions";
import { getDataAsync } from "./dataActions";

const initialState = {
  data: {
    "editor's choice": [],
    "latest articles": [],
    "latest review": [],
  },
};

export const dataReducer = handleActions(
  new Map([
    [
      getDataAsync.success,
      (state, { payload }) => ({
        ...state,
        data: payload,
      }),
    ],
  ]),
  initialState
);

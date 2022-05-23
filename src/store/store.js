import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import logger from "redux-logger";

import services from "../services";

import { dataReducer } from "./data/dataReducer";
import * as dataEpics from "./data/dataEpics";

let composeEnhancers;
if (process.env.NODE_ENV === "production") {
  composeEnhancers = compose;
} else {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const epicMiddleware = createEpicMiddleware({
  dependencies: services,
});

const rootReducer = combineReducers({
  data: dataReducer,
});

const rootEpic = combineEpics(...Object.values(dataEpics));

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "production"
    ? composeEnhancers(applyMiddleware(epicMiddleware))
    : composeEnhancers(applyMiddleware(logger, epicMiddleware))
);
epicMiddleware.run(rootEpic);

//epicMiddleware.run(rootEpic);

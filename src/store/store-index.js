import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/reducer";
import {createPromise} from "redux-promise-middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      createPromise({
        promiseTypeDelimiter: "_"
      })
    )
  )
);

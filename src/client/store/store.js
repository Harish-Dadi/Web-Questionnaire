import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import userReducer from "./reducer/userReducer";

const store = createStore(
  combineReducers({ user: userReducer }),
  {},
  applyMiddleware(logger, thunk, promise())
);

export default store;

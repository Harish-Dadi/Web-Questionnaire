import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import userReducer from "./reducer/userReducer";

const store = createStore(
  combineReducers({ user: userReducer }),
  applyMiddleware(logger, thunk)
);

export default store;

import { applyMiddleware, createStore } from "redux";
import { Reducer } from "./reducer";
import logger from "redux-logger";

export const store = createStore(Reducer, applyMiddleware(logger));

export default store;
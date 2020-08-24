import { createStore, applyMiddleware } from "redux";
import { StoreReducer } from "./Reducer";
import { asyncActions } from "./AsyncMiddleware";

export const Store = createStore(StoreReducer, applyMiddleware(asyncActions));

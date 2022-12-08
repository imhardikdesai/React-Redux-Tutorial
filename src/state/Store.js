import { createStoreHook } from "react-redux";
import { applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk'

export const store = createStoreHook(reducer, {}, applyMiddleware(thunk))


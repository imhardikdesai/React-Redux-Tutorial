// import { applyMiddleware, createStore } from "redux";
// import reducer from "./reducer";
// import thunk from 'redux-thunk'

// export const store = createStore(reducer, {}, applyMiddleware(thunk))

// ⬆️⬆️⬆️ code with harry code 

import { configureStore } from '@reduxjs/toolkit'
import reducer from "./reducer";
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
export const store = configureStore(reducer, {}, applyMiddleware(thunk))
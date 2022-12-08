// import { createStore} from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk'

// export  const store = createStoreHook(reducer, {}, applyMiddleware(thunk))
export  const store = createStore(reducer, {}, applyMiddleware(thunk))


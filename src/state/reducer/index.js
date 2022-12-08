import { combineReducers } from "redux";
import moneyReducers from './moneyReducer'

const reducer = combineReducers({
    amount: moneyReducers
})

export default reducer
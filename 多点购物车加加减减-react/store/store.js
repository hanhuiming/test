import {createStore, applyMiddleware} from "redux"
import Reducers from "./reducer/reducer"
import thunk from "redux-thunk"
let store=createStore(Reducers,applyMiddleware(thunk))
export default store

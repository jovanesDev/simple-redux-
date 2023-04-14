import { combineReducers, createStore } from "redux";
import reducers from './reducers'
// import counterReducer from "./reducers/counterReducer";

const store =  createStore(combineReducers(reducers))

export default store
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import LoginReducer from "./loginReducer";
import LogoutReducer from "./logoutReducer";

export default combineReducers({
  todos,
  visibilityFilter,
  LoginReducer,
  LogoutReducer
})
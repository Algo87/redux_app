/*
 * типы экшенов
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const IS_LOGIN = 'IS_LOGIN'
export const IS_LOGOUT = 'IS_LOGOUT'

/*
 * другие константы
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * генераторы экшенов
 */
let nextTodoId = 0;

export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter}
}

export default  function isLogin(isAuth) {
  return {
    type: IS_LOGIN,
    isAuth: isAuth
  }
}

export function isLogout(logout) {
  return {
    type: IS_LOGOUT,
    logout: logout
  }
}
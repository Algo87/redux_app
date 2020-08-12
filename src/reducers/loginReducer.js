const initialState={
  isAuth:false
}
const LoginReducer = (state=initialState, action) => {
  switch (action.type) {
    case('IS_LOGIN'):
      return {
        ...state,
        isAuth: action.isAuth
      }
    default:
      return state
  }
}

export default LoginReducer
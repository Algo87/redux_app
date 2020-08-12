const LoginReducer = (state=false, action) => {
  console.log(state)
  console.log(action)

  switch (action.type) {
    case("ISAUTH"):
      return {
        ...state,
        isAuth: action.isAuth
      }
    default:
      return state
  }
}

export default LoginReducer
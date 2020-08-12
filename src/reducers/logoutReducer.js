const initialState={
  logout:false
}
const LogoutReducer = (state=initialState, action) => {
  switch (action.type) {
    case('IS_LOGOUT'):
      return {
        ...state,
        logout: action.logout
      }
    default:
      return state
  }
}

export default LogoutReducer
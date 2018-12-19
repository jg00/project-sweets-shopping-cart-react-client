const initialState = {
  user: {},
  isAuth: false
};

const reducer = (state = initialState, action) => {
  if (action.type === "SET_AUTHENTICATE") {
    return {
      ...state,
      // isAuth: true
      user: action.responseData.userData, // {userData: {email, name, isAdmin}}
      isAuth: !state.isAuth
    };
  }
  if (action.type === "SET_AUTHENTICATE_MANUALLY") {
    return {
      ...state,
      // isAuth: true
      user: action.tokenInfo,
      isAuth: action.boolValue
    };
  }

  return state;
};

export default reducer;

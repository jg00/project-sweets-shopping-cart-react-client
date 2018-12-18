const initialState = {
  user: {},
  isAuth: false
};

const reducer = (state = initialState, action) => {
  if (action.type === "SET_AUTHENTICATE") {
    return {
      ...state,
      isAuth: true
      // user: action.userData
    };
  }

  return state;
};

export default reducer;

// if (action.type === "ADDCAT") {
//   return {
//     ...state,
//     cats: state.cats.concat(action.value),
//     count: state.count + action.count,
//     productObject: state.productObject.concat(action.productObject)
//   };
// }

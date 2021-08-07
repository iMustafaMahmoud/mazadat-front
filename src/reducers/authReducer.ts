const initialState = {
  isLoggedIn: false,
  userId: null,
  token: null,
};

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true };
    case "LOGOUT":
      return { ...state, isLoggedIn: false };
    case "SET_USER_ID":
      return { ...state, userId: action.payload };
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default Reducer;

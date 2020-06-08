export default (state = { user: null }, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.data };
    case "LOGOUT_USER":
      return { ...state, user: "" };
    default:
      return state;
  }
};

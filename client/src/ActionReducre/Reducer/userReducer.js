export default (state = { user: null, about: "", xyz: false }, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("LOGIN action.data", action.data);
      return { ...state, user: action.data };
    case "LOGOUT_USER":
      return { ...state, user: null };
    default:
      return state;
  }
};

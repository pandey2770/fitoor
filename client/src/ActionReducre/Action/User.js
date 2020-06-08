import axios from "axios";
import {
  FETCH_SUCCESS_MSG,
  FETCH_ERROR,
  FETCH_SUCCESS,
  FETCH_START
} from "../Constant/actiontype";

export const signUp = (userData, history) => {
  return async function(dispatch) {
    dispatch({ type: FETCH_START });
    const { data } = await axios.post("/api/signUp", { userData });
    if (data.sucess) {
      dispatch({
        type: FETCH_SUCCESS_MSG,
        payload: "User Successfully Registered "
      });
      history.push("/");
    }
  };
};

export const login = (userData, history) => {
  return async function(dispatch) {
    dispatch({ type: FETCH_START });
    await axios
      .post("/api/login", {
        username: userData.email,
        password: userData.password
      })
      .then(
        ({ data }) => {
          history.push("/");
          dispatch(loginDone(data));
          dispatch({ type: FETCH_SUCCESS, payload: "Login Done" });
        },
        () => {
          return dispatch({
            type: FETCH_ERROR,
            payload: "Please check your email or password"
          });
        }
      );
  };
};

export const getUser = () => {
  return async function(dispatch) {
    const { data } = await axios.get("/api/user");
    return dispatch(loginDone(data));
  };
};

export const loginDone = data => {
  return {
    type: "LOGIN",
    data
  };
};

export const logoutUser = history => {
  return async function(dispatch) {
    axios.get("/api/logout").then(({ data }) => {
      dispatch(getLogoutDispatch(data));
      return history.push("/login");
    });
  };
};
export const getLogoutDispatch = () => {
  return {
    type: "LOGOUT_USER"
  };
};

/* eslint-disable */

import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_SUCCESS_MSG,
  ERROR_BLANK
} from "../Constant/actiontype";

const INIT_STATE = {
  error: "",
  loading: false,
  time: new Date().getTime(),
  alert: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_START: {
      return { ...state, error: "", alert: "", loading: true };
    }

    case FETCH_SUCCESS: {
      return {
        ...state,
        error: false,
        success: false,
        loading: false
      };
    }
    case FETCH_SUCCESS_MSG: {
      return {
        ...state,
        error: false,
        loading: false,
        alert: action.payload,
        time: new Date().getTime(),
        success: true
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        error: true,
        success: false,
        alert: action.payload,
        time: new Date().getTime(),
        loading: false
      };
    }
    case ERROR_BLANK: {
      return {
        ...state,
        error: false,
        success: false,
        alert: "",
        time: new Date().getTime(),
        loading: false
      };
    }

    default:
      return state;
  }
};

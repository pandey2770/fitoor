import { combineReducers } from "redux";
import Common from "./common";
import myUserReducer from "./userReducer";

export default combineReducers({
  common: Common,
  myUsers: myUserReducer
});

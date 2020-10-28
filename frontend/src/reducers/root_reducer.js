import { combineReducers } from "redux";
import session from "./session/session_reducer";
import errors from "./session/errors_reducer";
import ui from "./ui_reducers";

const RootReducer = combineReducers({
  errors,
  session,
  ui
});

export default RootReducer;

import { combineReducers } from "redux";
import session from "./session/session_reducer";
import errors from "./session/errors_reducer";

const RootReducer = combineReducers({
  errors,
  session,
});

export default RootReducer;

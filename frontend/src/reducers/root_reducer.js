import { combineReducers } from "redux";
import session from "./session/session_reducer";
import errors from "./session/errors_reducer";
import ui from "./ui_reducers";
import EntitiesReducer from "./entities_reducer";

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  errors,
  session,
  ui
});

export default RootReducer;

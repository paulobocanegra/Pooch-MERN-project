import { combineReducers } from "redux";
import usersReducer from "./users_reducer.js";
import DogsReducer from './dog_reducer';
const entitiesReducer = combineReducers({
  users: usersReducer,
  dogs: DogsReducer
  
});

export default entitiesReducer;
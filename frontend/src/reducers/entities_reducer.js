import { combineReducers } from "redux";
import usersReducer from "./users_reducers/users_reducer";
import dogsReducer from './dogs/dog_reducer';
const entitiesReducer = combineReducers({
  users: usersReducer,
  dogs: dogsReducer
});

export default entitiesReducer;
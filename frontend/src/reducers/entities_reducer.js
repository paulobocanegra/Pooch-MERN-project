import { combineReducers } from "redux";
import usersReducer from "./users_reducers/users_reducer";
import dogsReducer from './dogs/dog_reducer';
import matchesReducer from './matches/matches_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  dogs: dogsReducer,
  matches: matchesReducer
});

export default entitiesReducer;
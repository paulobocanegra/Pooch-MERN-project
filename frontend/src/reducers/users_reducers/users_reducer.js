import {
  RECEIVE_USER,
  RECEIVE_USERS
} from '../../actions/user_actions'
import {RECEIVE_CURRENT_USER} from "../../actions/session_actions";
const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  // debugger
  switch (action.type) {
    // debugger
    case RECEIVE_USERS:
      return action.users.data
    case RECEIVE_USER:
      newState[action.user.data.id] = action.user.data
    case RECEIVE_CURRENT_USER:
      // debugger
      newState[action.currentUser.id] = action.currentUser;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
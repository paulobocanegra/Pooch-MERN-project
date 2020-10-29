import {RECEIVE_CURRENT_USER} from "../../actions/session_actions";
const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  // debugger
  switch (action.type) {
    // debugger
    case RECEIVE_CURRENT_USER:
      // debugger
      newState[action.currentUser.id] = action.currentUser;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
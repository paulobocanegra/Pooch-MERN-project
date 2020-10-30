import {
  RECEIVE_USER,
  RECEIVE_USERS
} from '../../actions/user_actions'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users.data
    case RECEIVE_USER:
      // debugger
      newState[action.user.data._id] = action.user.data;
    default:
      return state;
  }
};

export default usersReducer;
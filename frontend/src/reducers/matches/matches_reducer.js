import {
   RECEIVE_MATCH
} from '../../actions/match_actions';

const matchesReducer = (state = {}, action) => {
   Object.freeze(state);
   let newState = Object.assign({}, state);

   switch (action.type) {
      case RECEIVE_MATCH:
         newState[action.match.data._id] = action.match
         return newState;
      default:
         return state;
   }
}

export default matchesReducer;
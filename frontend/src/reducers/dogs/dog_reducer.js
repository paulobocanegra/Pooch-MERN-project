import { RECEIVE_ALL_DOGS, RECEIVE_DOG, REMOVE_DOG } from "../../actions/dog_actions"


const DogReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    // debugger
    switch (action.type) {
        case RECEIVE_ALL_DOGS:

            // return action.dogs;
            return action.dogs.data;
      case RECEIVE_DOG:
            // debugger
            newState[action.dog.data._id] = action.dog.data;
            // newState.dog.id = action.dog.data;
            return newState; 
        default:
            return state;
    }
}

export default DogReducer;


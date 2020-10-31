import { RECEIVE_ALL_DOGS, RECEIVE_DOG, REMOVE_DOG } from "../../actions/dog_actions"


const DogReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_DOGS:


            return action.dogs.data;
      case RECEIVE_DOG:

            newState[action.dog.data._id] = action.dog.data;

            return newState; 
        default:
            return state;
    }
}

export default DogReducer;


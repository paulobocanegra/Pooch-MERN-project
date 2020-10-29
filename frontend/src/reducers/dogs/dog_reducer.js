import { RECEIVE_ALL_DOGS, RECEIVE_DOG, REMOVE_DOG } from "../../actions/dog_actions"


const DogReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    // debugger
    switch (action.type) {
        case RECEIVE_ALL_DOGS:
            return action.dogs;
            // return action.dogs.data;
      case RECEIVE_DOG:
            newState.dog.id = action.dog;
            // newState.dog.id = action.dog.data;
            return newState; 
        default:
            return state;
    }
}

export default DogReducer;

// const TweetsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
//     Object.freeze(state);
//     let newState = Object.assign({}, state);
//     switch(action.type) {
//       case RECEIVE_TWEETS:
//         newState.all = action.tweets.data;
//         return newState;
//       case RECEIVE_USER_TWEETS:
//         newState.user = action.tweets.data;
//         return newState;
//       case RECEIVE_NEW_TWEET:
//         newState.new = action.tweet.data
//         return newState;
//       default:
//         return state;
//     }
//   };
  
//   export default TweetsReducer;



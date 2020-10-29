import { getDogs, getDog, createDog } from "../util/dogs_util"

export const RECEIVE_ALL_DOGS = "RECEIVE_ALL_DOGS";
export const RECEIVE_DOG = "RECEIVE_DOG";
// export const REMOVE_DOG = "RECEIVE_DOG";


//ACTIONS 
export const receiveAllDogs = (dogs) => {
    return {
        type: RECEIVE_ALL_DOGS,
        dogs
    };
};

export const receiveDog = (dog) => {
    return {
        type: RECEIVE_DOG,
        dog
    };
};

// export const removeDog = (dogId) => {
//     return {
//         type: REMOVE_DOG,
//         dogId
//     }
// }

// THUNK ACTION CREATORS
export const fetchDogs = () => (dispatch) => {
    return getDogs()
        .then((result) => dispatch(receiveAllDogs(result)))
        .catch(err => console.log(err))
};

export const fetchDog = (dogId) => (dispatch) => {
    return getDog(dogId)
        .then((result) => dispatch(receiveDog(result)))
        .catch(err => console.log(err))
};

export const composeDog = (data) => (dispatch) => {
    return createDog(data)
      .then((result) => dispatch(receiveDog(result)))
      .catch((err) => console.log(err));
};



// export const deleteDog = (dogId) => (dispatch) => {
//     return getDog(dogId)
//     .then( () => dispatch(removeDog(dogId)))
//     .catch(err => console.log(err))
// }

// export const fetchTweets = () => dispatch => (
//   getTweets()
//     .then(tweets => dispatch(receiveTweets(tweets)))
//     .catch(err => console.log(err))
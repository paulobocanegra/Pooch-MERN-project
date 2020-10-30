import * as util from '../util/user_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = (users) => ({
   type: RECEIVE_USERS,
   users
})

export const receiveUser = (user) => ({
   type: RECEIVE_USER,
   user
})

export const fetchUsers = () => dispatch => (
   util.fetchUsers()
      .then( users => dispatch(receiveUsers(users)))
      .catch( err => console.log(err) )
)

export const updateUser = (userId, user) => dispatch => (
   util.updateUser(userId, user)
      .then( user => dispatch(receiveUser(user)) )
      .catch( err => console.log(err) )
)

export const uploadPhoto = (userId, file) => dispatch => (
   util.uploadPhoto(userId, file)
      .then( user => dispatch(receiveUser(user)) )
      .catch( err => console.log(err) )
)
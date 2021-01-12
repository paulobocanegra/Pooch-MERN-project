import { connect } from "react-redux";
import { fetchDogs } from '../../actions/dog_actions';
import Profile from "./profile";
import { logout } from "../../actions/session_actions";
import * as FetchItems from '../../util/fetch_current_user_items';
import {fetchUsers } from '../../actions/user_actions';
import { updateUser, uploadPhoto } from "../../actions/user_actions";


const mapStateToProps = (state) => {
  let currentUserObject;
  const currentUserId = state.session.user.id;
  let allUsers = Object.values(state.entities.users);
  allUsers.forEach((user) => {
    if (user._id === currentUserId) {
      currentUserObject = user;
    }
  });

  return {
    currentUser: state.session.user,
    user: state.entities.users[state.session.user.id],
    currentUserObject,
    allUsers,
    // currentUser: state.entities.users[state.session.user],
    dogs: FetchItems.fetchDogs( state.session.user.id, Object.values(state.entities.dogs) )
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchDogs: () => dispatch(fetchDogs()),
    fetchUsers: () => dispatch(fetchUsers()),
    updateUser: (userId, user) => dispatch(updateUser(userId, user)),
    uploadPhoto: (userId, file) => dispatch(uploadPhoto(userId, file))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

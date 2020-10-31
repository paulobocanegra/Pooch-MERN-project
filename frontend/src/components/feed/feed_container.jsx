import {connect} from 'react-redux';
import Feed from './feed';
import { logout } from "../../actions/session_actions";
import {fetchUser, fetchUsers} from "../../actions/user_actions";


  
// const mSTP = (state) => {
//   let currentUser;
//   const currentUserId = state.session.user.id;
//   Object.values(state.entities.users).forEach((user) => {
//     if (user.id === currentUserId) {
//       currentUser = user;
//     }
//   });
//   debugger
//   return {
//     currentUser,
//   };
// };

const mSTP = (state) => {
  let currentUser;
  const currentUserId = state.session.user.id;
  Object.values(state.entities.users).forEach((user) => {
    // debugger
    if (user._id === currentUserId) {
      currentUser = user;
    }
  });
  // debugger
  return {
    currentUser,
  };
};


const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(logout()),
      fetchUser: (userId) => dispatch(fetchUser(userId)),
      fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(mSTP, mapDispatchToProps)(Feed);
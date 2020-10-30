import { connect } from "react-redux";
import { fetchDogs } from '../../actions/dog_actions';
import Profile from "./profile";
import { logout } from "../../actions/session_actions";
import * as FetchItems from '../../util/fetch_current_user_items';
import {fetchUsers } from '../../actions/user_actions';
import { updateUser } from "../../util/user_util";


const mapStateToProps = (state) => {

  return {
    currentUser: state.session.user,
    dogs: FetchItems.fetchDogs( state.session.user.id, Object.values(state.entities.dogs) )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchDogs: () => dispatch(fetchDogs()),
    fetchUsers: () => dispatch(fetchUsers()),
    updateUser: (userId, user) => dispatch(updateUser(userId, user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

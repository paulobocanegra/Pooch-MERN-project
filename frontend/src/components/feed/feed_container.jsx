import {connect} from 'react-redux';
import Feed from './feed';
import { logout } from "../../actions/session_actions";

const mapStateToProps = state => {
    return {
      currentUser: state.session.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
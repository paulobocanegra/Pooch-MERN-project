// import {register,} from '../../actions/session_actions';
import {connect} from 'react-redux';
// import { login } from '../../util/session_api_util';
import LandingComponent from './landing';
import { openModal } from '../../actions/modal_actions';

// const mapStateToProps = state => {
//   return{

//   };
// };

const mapDispatchtoProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(null, mapDispatchtoProps)(LandingComponent);
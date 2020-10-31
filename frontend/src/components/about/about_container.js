import { connect } from 'react-redux';
import AboutComponent from './about';
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

export default connect(null, mapDispatchtoProps)(AboutComponent);
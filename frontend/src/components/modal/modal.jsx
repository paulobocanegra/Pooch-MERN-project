import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Login from '../session/login_form_container';
import SignupFormContainer from '../session/register_form_container';
import LearnmoreContainer from "../Learnmore/Learnmore";

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
         case 'LOGIN':
            component = <Login />;
            break;
         case 'signup':
            component = <SignupFormContainer />;
            break;
         case 'learnmore':
               component = <LearnmoreContainer/>
               break;
         default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
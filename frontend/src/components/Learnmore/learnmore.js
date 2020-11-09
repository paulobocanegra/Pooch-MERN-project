import {connect} from "react-redux";
import {closeModal} from "../../actions/modal_actions";
import LearnMore from "./learnmore_component";

const mapStateToProps = state =>{
    return{

    };
};


const mapDispatchToProps = dispatch =>{
    return {
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(null, mapDispatchToProps)(LearnMore);
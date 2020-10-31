import {connect} from "react-redux";
import {closeModal} from "../../actions/modal_actions";
import Learnmore from "../Learnmore_component.jsx";

const mapStateToProps = state =>{
    return{

    };
};


const mapDispatchToProps = dispatch =>{
    return {
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Learnmore)
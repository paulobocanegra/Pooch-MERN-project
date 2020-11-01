import {connect} from "react-redux";
import {closeModal} from "../../actions/modal_actions";
import Learnmore from "./learnmore_component";

const mapStateToProps = state =>{
    return{

    };
};


const mapDispatchToProps = dispatch =>{
    return {
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Learnmore);
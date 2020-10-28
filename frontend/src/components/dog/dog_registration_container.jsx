import {composeDog} from "../../actions/dog_actions";
import {connect} from "react-redux"
import DogRegistration from "./dog_registration";

const mapStateToProps = state =>{
    return{

    };
};

const mapDispatchToProps = (dispatch) => {
  return {
      composeDog: (data) => dispatch(composeDog(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DogRegistration);

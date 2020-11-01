import React from 'react';
import ModalContainer from '../modal/modal';
import { Link } from "react-router-dom";
import "./landing.css";
import Footer from "../footer/footer"

class LandingComponent extends React.Component {
   constructor(props){
       super(props)
   }

    
render(){
    const {openModal} = this.props;
        return (
          <div className="Landing-page">
            <ModalContainer />
            
            <div className="Nav-bar">
              <div className="Nav-left">
                <img className="Logo" src="./Pooch-logo.png" alt="" />
                <h1 className="Logo-text">pooch</h1>
              </div>
              <div className="Nav-right">
                <Link className="Nav-bar-link" to="/about">
                  <div className="Nav-bar-text">About</div>
                </Link>
                <div className="main-dropdown">
                  <div className="dropdown-buttom">Contact</div>
                  <div className="dropdown-content"><a className="footer-link" target="_blank" href="https://www.gmail.com" />
                    <li>juancattaneo92@gmail.com</li>
                    <li>paulobocanegra@gmail.com</li>
                    <li>diegodiegorene@gmail.com</li>
                    <li>oah232@gmail.com</li>
                  </div>
                </div>
                <button
                  className="Nav-button"
                  onClick={() => openModal("LOGIN")}
                >
                  Login
                </button>
              </div>
            </div>
            <div className="Hero-banner">
              <img className="Hero-image" src="./Hero.jpeg" alt="" />
              <div className="Call-to-action">
                <div className="Text-wrapper1">
                  <h2 className="Join-pooch-text">Join Pooch</h2>
                  <h4 className="Hook-text">
                    sign up for pooch to start socializing your dog and meet
                    other dog lovers like you!
                  </h4>
                </div>
                <div className="Button-wrapper1">
                  <button
                    className="Login-button"
                    onClick={() => openModal("LOGIN")}
                  >
                    Login
                  </button>
                  <Link to="/register">
                    <button className="Signup-button">Sign Up</button>
                  </Link>
                </div>
              </div>
            </div>
            <h1 className="Title-Pooch">Why choose Pooch?</h1>
            <div className="Learn-more-section">
              <div className="Learn-more-child">
                <img
                  className="Learn-more-image"
                  src="./dog_and_comp.png"
                  alt=""
                />
                <h5 className="Learn-more-text">
                  Get advice from other dog lovers about the best product for
                  your pup!
                </h5>
                <button className="Learn-more-button">Learn More</button>
              </div>
              <div className="Learn-more-child">
                <img
                  className="Learn-more-image"
                  src="./phone_and_dog.png"
                  alt=""
                />
                <h5 className="Learn-more-text">
                  Connect with other dog lovers and get you pup the
                  socialization they need!
                </h5>
                <button className="Learn-more-button">Learn More</button>
              </div>
              <div className="Learn-more-child">
                <img
                  className="Learn-more-image"
                  src="./friend_dog.png"
                  alt=""
                />
                <h5 className="Learn-more-text">
                  Socialize your dog and meet new people along the way!
                </h5>
                <button className="Learn-more-button">Learn More</button>
              </div>
            </div>
            <div className="Socializing-section">
              {/* <img className= "Dog-image" src="landing-dog.png" alt=""/> */}
              <div className="Why-socialize-blurb">
                {/* <p className="Socializing-blurb"><h2 className="socialization-header">Why Socialize?</h2>Socialization teaches us to be polite, to not solve problems with violence, and how to interact with and respect the boundaries of others. For dogs, socialization means understanding their place in the pack, and following the rules set by the Pack Leaders.</p> */}
              </div>
            </div>
            <Footer />
          </div>
        );
}
}













export default LandingComponent
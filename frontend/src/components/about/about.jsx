import "./about.css";
import React from 'react';
import ModalContainer from '../modal/modal';
import Footer from "../footer/footer";
import {Link} from "react-router-dom"

class About extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        const { openModal } = this.props;
        return(
            <div className="Landing-page">
                <div className="Landing-page">
                    <ModalContainer />

                    <div className="Nav-bar">
                        {/* <Link to="/"> */}
                        <div className="Nav-left">
                            <img className="Logo" src="./Pooch-logo.png" alt="" />
                            <h1 className="Logo-text">pooch</h1>
                        </div>
                        {/* </Link> */}

                        <div className="Nav-right">
                            <Link className="Nav-bar-link" to="/">
                                <h3 className="Nav-bar-text">Home</h3>
                            </Link>
                            <h3 className="Nav-bar-text">Contact</h3>
                            <button
                                className="Nav-button"
                                onClick={() => openModal("LOGIN")}
                            >
                                Login
                            </button>
                            <Link to="/register">
                                <button className="Nav-button">Sign Up</button>
                            </Link>
                        </div>
                    </div>
                    <h1 className="Choosing-pooch">About Us</h1>
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
                    <Footer />
                </div>
            </div>
        )
    }
}

export default About;
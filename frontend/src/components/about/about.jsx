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
                    <div className="Learn-more-section-about">
                        <div className="Learn-more-child-about">
                            <img
                                className="Learn-more-image"
                                src="./diego_rene.png"
                                alt=""
                            />
                            <h5 className="Learn-more-text-about">
                                <h3 className="developer-name">Diego Chavez (Frontend Lead)</h3>
                                <br />
                                Originally from San Diego. Passionate about improving UX and UI design. Always keeping up with development trends.
                                <br />
                                <a href="https://www.linkedin.com/in/diego-chavez-784310114/" target="_blank">
                                    <button className="Learn-more-button">Learn More</button>
                                </a>
                            </h5>
                        </div>
                        <div className="Learn-more-child-about">
                            <h5 className="Learn-more-text-about">
                                <h3 className="developer-name">Paulo Bocanegra (Backend Lead)</h3>
                                <br/>
                                Born in Lima, Peru. Passionate about developing technologies focused on the improvement of people's quality of life.
                                <br />
                                <a href="https://www.linkedin.com/in/paulo-bocanegra-a89b641b9/" target="_blank">
                                    <button className="Learn-more-button">Learn More</button>
                                </a>
                            </h5>
                            <img
                                className="Learn-more-image"
                                src="./paulo_bocanegra.png"
                                alt=""
                            />
                        </div>
                        <div className="Learn-more-child-about">
                            <img
                                className="Learn-more-image"
                                src="./juan_cattaneo.png"
                                alt=""
                            />
                            <h5 className="Learn-more-text-about">
                                <h3 className="developer-name">Juan Carlos Cattaneo (Flex)</h3>
                                <br />
                                Born in Lima, Peru. Passionate about .
                                <br />
                                <a href="https://www.linkedin.com/in/juan-carlos-cattaneo-450a3b97/" target="_blank">
                                    <button className="Learn-more-button">Learn More</button>
                                </a>
                            </h5>
                        </div>
                        <div className="Learn-more-child-about">
                            <h5 className="Learn-more-text-about">
                                <h3 className="developer-name">Omar Hernandez (Technical Lead)</h3>
                                <br />
                                San Francisco native. Passionate about FILL IN WITH YOUR PASSION. Problem Solver.
                                <br />
                                <button className="Learn-more-button">Learn More</button>
                            </h5>
                            <img
                                className="Learn-more-image"
                                src="./phone_and_dog.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default About;
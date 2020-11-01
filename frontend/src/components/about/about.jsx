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
                        <div className="Nav-left">
                            <Link className="Nav-bar-link" to="/">
                                <img className="Logo" src="./Pooch-logo.png" alt="" />
                                <h1 className="Logo-text">pooch</h1>
                             </Link>
                        </div>

                        <div className="Nav-right">
                            <div><Link className="Nav-bar-link" to="/"><div className="Nav-bar-text">Home</div></Link> </div> 
                            <div className="main-dropdown"> 
                                <div className="dropdown-buttom">Contact</div>
                                <div className="dropdown-content"><a className="footer-link"  target="_blank" href="https://www.gmail.com" />
                                        <li>juancattaneo92@gmail.com</li>
                                        <li>paulobocanegra@gmail.com</li>
                                        <li>diegodiegorene@gmail.com</li>
                                        <li>oah232@gmail.com</li>
                                </div>
                            </div>
                            <button className="Nav-button" onClick={() => openModal("LOGIN")}>Login</button>
                            <Link to="/register">
                                <button className="Nav-button">Sign Up</button>
                            </Link>
                        </div>
                    </div>
                    <h1 className="Title-Pooch">About Us</h1>
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
                                Originally from San Diego. Passionate about improving UX and UI design. Always keeping up with development trends. The Detailist.
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
                                Born in Lima, Peru. Passionate about developing technologies focused on the improvement of people's quality of life. Critical thinker.
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
                                Born in Lima, Peru. Passionate about learning new technologies. Jumps from backend to frontend to support every team member. Team player.
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
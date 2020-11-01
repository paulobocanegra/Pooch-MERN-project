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
                                    <li><a className="email-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=juancattaneo92@gmail.com" target="_blank">juancattaneo92@gmail.com</a></li>
                                    <li><a className="email-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=paulobocanegra@gmail.com" target="_blank">paulobocanegra@gmail.com</a></li>
                                    <li><a className="email-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=diegodiegorene@gmail.com" target="_blank">diegodiegorene@gmail.com</a></li>
                                    <li><a className="email-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=oah232@gmail.com" target="_blank">oah232@gmail.com</a></li>
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
                                <p className="developer-name">Diego Chavez (Frontend Lead)</p>
                                <br />
                                Originally from San Diego. Passionate about improving UX and UI design. Always keeping up with development trends. Attention to Detail.
                                <br />
                                <a href="https://www.linkedin.com/in/diego-chavez-784310114/" target="_blank">
                                    <button className="Learn-more-button">Learn More</button>
                                </a>
                            </h5>
                        </div>
                        <div className="Learn-more-child-about">
                            <h5 className="Learn-more-text-about">
                                <p className="developer-name">Paulo Bocanegra (Backend Lead)</p>
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
                                <p className="developer-name">Juan Carlos Cattaneo (Flex - frontend/backend)</p>
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
                                <p className="developer-name">Omar Hernandez (Flex - Technical Lead)</p>
                                <br />
                                San Francisco native. Passionate about problem solving with excellent debugging skills. Divergent Thinker.
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
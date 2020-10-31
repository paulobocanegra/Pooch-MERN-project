import React from 'react'
import './footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-div">
                <div>
                    <div className="footer-section">
                        <div className="footer-ul">
                            <h3 className="footer-title">About</h3>
                            <ul>
                                <li className="footer-li"><a target="_blank" className="footer-link" href="https://github.com/juancattaneo92/Pooch-MERN-project">About Pooch</a></li>
                                <li className="footer-li"><a target="_blank" className="footer-link" href="https://www.linkedin.com/in/paulo-bocanegra-a89b641b9/">Developers</a></li>
                            </ul>
                        </div>
                        <div className="footer-ul">
                            <h3 className="footer-title">Contact</h3>
                            <ul className="contact-text">
                                <li className="footer-li">Email: pooch@gmail.com</li>
                                <li className="footer-li"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
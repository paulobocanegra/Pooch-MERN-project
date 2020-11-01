import React from 'react'
import './footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-div">

                    <div className="logo-footer">
                        <img className="Logo" src="./Pooch-logo.png" alt="" />
                        <h1 className="Logo-text-footer">pooch</h1>
                    </div>
                    <div className="footer-section">
                        <div className="footer-left">
                            <h3 className="footer-title">About</h3>
                            <ul>
                                <li className="footer-li"><a target="_blank" className="footer-link" href="https://github.com/juancattaneo92/Pooch-MERN-project">Pooch</a></li>
                                <li className="footer-li"><a target="_blank" className="footer-link" href="https://www.linkedin.com/in/paulo-bocanegra-a89b641b9/">Developers</a></li>
                            </ul>
                        </div>
                        <div className="footer-right">
                            <h3 className="footer-title">Contact</h3>
                            <ul className="contact-text">
                            <li className="footer-li"><a target="_blank" className="footer-link" href="https://www.gmail.com">Email: pooch@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Footer;
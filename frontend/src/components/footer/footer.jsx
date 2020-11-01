import React from 'react'
import './footer.css'

class Footer extends React.Component {
    render() {
        return (
            
            <div className="footer-div">
                    <div className="footer-section">
                        <div className="footer-content">
                                <div className="footer-title">About</div>
                                <div>
                                    <div className="footer-li"><a target="_blank" className="footer-link" href="https://github.com/juancattaneo92/Pooch-MERN-project">Pooch</a></div>
                                    <div className="footer-li"><a target="_blank" className="footer-link" href="https://www.linkedin.com/in/paulo-bocanegra-a89b641b9/">Developers</a></div>
                                </div>
                        </div>
                    </div>
                    <div className="logo-footer">
                        <img className="Logo-footer-pic" src="./Pooch-logo.png" alt="" />
                        <h1 className="Logo-text-footer">pooch</h1>
                    </div>
            </div>
        )
    }
}

export default Footer;
import '../static/style/footer.css'

import React from 'react'
import footer_icon from '../static/images/footer-icon.png'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className='footer-logo'>
                    <img src={ footer_icon } alt="footer icon" />
                    <b>HelpMeOut</b>
                </div>
                <div className='footer-container'>
                    <div className="card">
                        <h5>Menu</h5>
                        <a href="#">Home</a>
                        <a href="#">Converter</a>
                        <a href="#">How It Works</a>
                    </div>
                    <div className="card">
                        <h5>About Us</h5>
                        <a href="#">About</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="card">
                        <h5>Screen Record</h5>
                        <a href="#">Browser Window</a>
                        <a href="#">Desktop</a>
                        <a href="#">Applicatin</a>
                    </div>
                </div>

            </footer>

        </>
    )
}

export default Footer


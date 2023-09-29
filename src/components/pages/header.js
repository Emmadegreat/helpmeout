import '../static/style/header.css'

import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../static/images/logo.png'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className='logo'>
                    <img src={ logo } alt="logo" />
                    <b>HelpMeOut</b>
                </div>
                <div className='links'>
                    <span>Features</span>
                    <span>How It Works</span>
                </div>
                <div className='get-started'>
                    <Link to="./signup">signup</Link>
                    <p>Get Started</p>
                </div>

            </header>

        </>
    )
}

export default Header


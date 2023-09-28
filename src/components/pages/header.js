import '../static/style/header.css'

import React from 'react'

const Header = () => {
    return (
        <>
            <section className="header">
                <div className='logo'>
                    <img src="" alt="logo" />
                    <span>HelpMeOut</span>
                </div>
                <div className='links'>
                    <span>Features</span>
                    <span>How It Works</span>
                </div>
                <div className='get-started'>
                    <p>Get Started</p>
                </div>

            </section>

        </>
    )
}

export default Header


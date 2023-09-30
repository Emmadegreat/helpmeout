import '../static/style/uservideo.css'

import Footer from './footer'
import React from 'react'
import logo from '../static/images/logo.png'
import user from '../static/images/user.png'
import web from '../static/images/web_card.png'
import web1 from '../static/images/web_card1.png'
import web2 from '../static/images/web_card2.png'
import web3 from '../static/images/web_card3.png'

const Uservideo = () => {

    return (
        <>
            <section className="user-section">
                <section className='inner-sect1'>
                    <div className='logo'>
                        <img src={ logo } alt="logo" />
                        <b>HelpMeOut</b>
                    </div>

                    <div className='user'>
                        <img src={ user } alt="user" />
                        <span>John Mark </span>
                    </div>
                </section>

                <section className='inner-sect2'>
                    <div>
                        <h2>Hello, John Mark</h2>
                        <p>Here are your recorded videos</p>
                    </div>
                    <form action="">
                        <input type="search"  placeholder='Search for a particular video' />
                    </form>

                </section>

            </section> <hr />

            <section className='listing-section'>

                <div className='inner'>
                    <p>Recent files</p>
                    <img src={web} alt="web card" />
                </div>
                <div className='inner'>
                    <img src={web1} alt="web card" />
                </div>

            </section>

            <section className='file-section'>
                <div className='inner'><p>Files from last week</p>
                     <img src={web2} alt="web card" />
                </div>
                <div className='inner'>
                     <img src={web3} alt="web card" />
                </div>

            </section><br />

        <Footer/>
        </>
    )
}

export default Uservideo

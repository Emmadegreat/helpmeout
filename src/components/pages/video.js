import '../static/style/video.css'

import Footer from './footer'
import Header from './header'
import { Link } from 'react-router-dom'
import React from 'react'
import facebook from '../static/images/facebook.png'
import telegram from '../static/images/telegram.png'
import video from '../static/images/video.png'
import whatsapp from '../static/images/whatsapp.png'

const Video = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='spacer'></div>
                <section className="video-container">
                    <div className="card">
                        <h2>Your video is ready!</h2>
                        <p>Name <br /> <span>Untitled_Video_20232509 </span></p>
                        <div className='email-container'>
                            <input type="email" name="" id="" placeholder='Enter email of receiver' />
                            <button type='submit'>Send</button>
                        </div>
                        <span>Video Url </span>
                        <small>https://www.helpmeout/Untitled_Video_20232509</small>
                        <div className='share-links'>
                            <p>Share your video </p>
                            <div className='btn-wrapper' id='btn-cont'>
                                <a href="https://www.facebook.com/" className="link"><img src={facebook} alt="facebook" /> Facebook</a>
                                <a href="https://web.whatsapp.com/" className="link"><img src={whatsapp} alt="whatsapp" /> WhatsApp</a>
                                <a href="https://web.telegram.org/" className="link"><img src={telegram} alt="telegram" /> Telegram</a>
                            </div>
                        </div>
                    </div>
                    <div className="card" id='transcribe'>
                        <img src={video} alt="video" />
                        <p>Transcribe</p>
                        <select name="" id="">
                            <option value="english">English</option>
                            <option value="german">German</option>
                            <option value="arabic">Arabic</option>
                            <option value="french">French</option>
                            <option value="latin">Latin</option>
                        </select>
                    </div>

                </section>

                <section className="save-container">
                    <p>
                        To ensure the availability and privacy of your video,
                        we recommend saving it to your account.
                    </p>
                    <button type='submit' id='save'>Save Video</button>
                    <span>Don't have an account? <Link to="/signup">Create account</Link></span>
                </section>

            </div>
            <Footer/>

        </>
    )
}

export default Video

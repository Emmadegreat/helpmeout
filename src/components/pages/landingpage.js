import '../static/style/landingpage.css'

import Footer from './footer'
import Header from './header'
import React from 'react'
import dot1 from '../static/images/dot1.png'
import dot2 from '../static/images/dot2.png'
import easy_share from '../static/images/easy_share.png'
import lady from '../static/images/lady.png'
import learn_effort from '../static/images/learn-effortlessly.png'
import oldman from '../static/images/oldman.png'
import oldwoman from '../static/images/oldwoman.png'
import record_screen1 from '../static/images/record-screen1.png'
import revisit from '../static/images/revisit.png'
import share_record from '../static/images/share-your-recording.png'
import simple_screen_record from '../static/images/simple_screen_record.png'
import video_repository from '../static/images/Video-repository.png'

const Landingpage = () => {


    return (
        <><Header/><div className='spacer'></div>
            <main>
                <section className="hero-section">
                    <div className='card' id='card-1'>
                        <h1>
                            Show Them <br />
                            Don’t Just Tell
                        </h1>
                        <p>
                            Help your friends and loved ones by creating and
                            sending videos on how to get things done on a website.
                        </p>
                        <button><a href="/install">Install HelpMeOut &nbsp; &#x2192;</a></button>
                    </div>
                    <div className='card' id='card-2'>
                        <div className='inner-card1'>
                            <img src={oldwoman} alt="oldwoman" />
                            <img src={oldman} alt="oldman" />

                        </div>
                        <div className='inner-card2'>
                            <img src={lady} alt="lady" />
                        </div>

                    </div>
                </section>

                <div className="spacer"></div>

                <section className='features-section'>
                    <div className="features">
                        <h2>Features</h2>
                        <p>Key Highlights of Our Extension</p>
                    </div>

                    <div className='feature-container'>
                        <div className='feature-card'>
                            <article>
                                <img src={simple_screen_record} alt="simple screen record" />
                                <div>
                                    <h4>Simple Screen Recording</h4>
                                    <p>
                                        Effortless screen recording for everyone.
                                        Record with ease, no tech expertise required.
                                    </p>
                                </div>
                            </article>
                            <article>
                                <img src={easy_share} alt="easy to share" />
                                <div>
                                    <h4>Easy-to-Share URL</h4>
                                    <p>
                                        Share your recordings instantly with a single link.
                                        No attachments, no downloads..
                                    </p>
                                </div>
                            </article>
                            <article>
                                <img src={revisit} alt="revisit" />
                                <div>
                                    <h4>Revisit Recordings</h4>
                                    <p>
                                        Access and review your past content effortlessly.
                                        Your recordings, always at your fingertips..
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div className='feature-card'>
                            <img src={video_repository} alt="video repository" />
                        </div>
                    </div>

                </section>

                <div className="spacer"></div>

                <section className="works-section">
                    <h2>How it works</h2>
                    <div className="works-container">
                        <div>
                            <button>1</button>
                            <h4>Record Screen</h4>
                            <p>
                                Click the "Start Recording" button in our extension.
                                choose which part of your screen to capture and who you
                                want to send it to.
                            </p>
                            <img src={record_screen1} alt="record screen" />
                        </div>
                        <div>
                            <button>2</button>
                            <h4>Share Your Recording</h4>
                            <p>
                                We generate a shareable link for your video.
                                Simply send it to your audience via email or copy
                                the link to send via any platform.
                            </p>
                            <img src={share_record} alt="share record" />
                        </div>
                        <div>
                            <button>3</button>
                            <h4>Learn Effortlessly</h4>
                            <p>
                                Recipients can access your video effortlessly through the
                                provided link, with our user-friendly interface suitable
                                for everyone.
                            </p>
                            <img src={learn_effort} alt="learn effortlessly" />
                        </div>
                    </div>
                </section>

            </main>
            <Footer/>

        </>
    )
}

export default Landingpage

import '../static/style/signup.css'

import { Link } from 'react-router-dom'
import React from 'react'
import facebook_icon from '../static/images/facebook_icon.png'
import google_icon from '../static/images/google_icon (2).png'
import logo from '../static/images/logo.png'

const Signup = () => {

    return (
        <>
            <section className="signup">
                <div className='logo'>
                    <Link to="/"><img src={ logo } alt="logo" /></Link>
                    <b>HelpMeOut</b>
                </div><br />
                <div className="form-container">
                    <div className="first-part">
                        <h3>Log in or Sign up</h3>
                        <p>
                            Join millions of others in sharing successful moves on HelpMeOut.
                        </p>
                    </div>

                    <form action="">
                        <div className='login-links'>
                            <a href="google link"><img src={google_icon} alt="google icon" /> Continue with Google</a>
                            <a href="facebook link"><img src={ facebook_icon} alt="facebook icon" /> Continue with Facebook</a>

                        </div>
                        <div className='hr-wrapper'>
                            <span style={{width:"50%", paddingTop:"0.6rem"}}><hr /></span>
                            <span>or</span>
                            <span style={{width:"50%", paddingTop:"0.6rem"}}><hr /></span>
                        </div>


                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="" placeholder='Enter your email address' />
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" id="" placeholder='Enter your password address' />
                        <button><Link to="/uservideo">Sign Up</Link> </button>
                    </form>
                </div>

            </section>

        </>
    )
}

export default Signup

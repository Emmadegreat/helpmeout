import '../static/style/signup.css'

import React from 'react'
import logo from '../static/images/logo.png'

const Signup = () => {

    return (
        <>
            <section className="signup">
                <div className='logo'>
                    <img src={ logo } alt="logo" />
                    <b>HelpMeOut</b>
                </div><br />
                <div className="form-container">
                    <div className="first-part">
                        <h3>Log in or Sign up</h3>
                        <p>
                            Join millions of others in sharing <br /> successful moves on HelpMeOut.
                        </p>
                    </div>

                    <form action="">
                        <div className='login-links'>
                            <a href="google link">Continue with Google</a>
                            <a href="facebook link">Continue with Facebook</a>
                            <span><hr /></span>
                        </div>


                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="" placeholder='Enter your email address' />
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" id="" placeholder='Enter your password address' />
                        <button>Sign up</button>
                    </form>
                </div>

            </section>

        </>
    )
}

export default Signup

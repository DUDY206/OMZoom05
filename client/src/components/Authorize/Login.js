import React, {useState} from 'react';
import axios from 'axios';

const Login = ({setLoginName,setLoginPassword,login_submit}) => {
    return (
        <form  className="sign-in-form" onSubmit={event => {login_submit(event)}}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <i className="fas fa-user"/>
                <input type="text" placeholder="Username" name="name" onChange={(event => setLoginName(event.target.value))}/>
            </div>
            <div className="input-field">
                <i className="fas fa-lock"/>
                <input type="password" placeholder="Password" name="password" onChange={(event => setLoginPassword(event.target.value))}/>
            </div>
            <input type="submit" value="Login" className="btn solid"/>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
                <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"/>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-twitter"/>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-google"/>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"/>
                </a>
            </div>
        </form>
    )
}

export default Login;
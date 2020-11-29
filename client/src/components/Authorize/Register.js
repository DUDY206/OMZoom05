import React, {useState} from 'react';
import axios from 'axios';

const Register = ({setName,setEmail,setPassword,setConfirmPassword,reg_submit}) => {
    return (
        <form onSubmit={event => reg_submit(event)} action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
                <i className="fas fa-user"/>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="name" className="joinInput" name="name"/>
            </div>
            <div className="input-field">
                <i className="fas fa-envelope"/>
                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="email" className="joinInput" name="email"/>
            </div>
            <div className="input-field">
                <i className="fas fa-lock"/>
                <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="password" className="joinInput" name="password"/>
            </div>
            <div className="input-field">
                <i className="fas fa-lock"/>
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="confirm_password" className="joinInput " name="confirm_password"/>
            </div>

            <input type="submit" className="btn" value="Sign up" />
            {/*<input type="submit" className="btn" value="Sign up" />*/}
            <p className="social-text">Or Sign up with social platforms</p>
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

export default Register;
import React, {useState} from 'react';
import ScriptTag from 'react-script-tag';
import './Register.css';
import axios from 'axios';

const Register = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isSignUp,setIsSignUp] = useState(true);
    const [confirmPassword,setConfirmPassword] = useState('');
    const axios = require("axios");

    const check_same_pw = (event) => {
        if(password !== confirmPassword){
            event.preventDefault();
            alert('Mat khau khong khop');
        }else{
            axios
                .post("http://localhost:5000/register",{
                'name':name,
                'email':email,
                'password':password
                }).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
            })
        }

    }

    return (
        <div className={`container ${isSignUp ? '' : 'sign-up-mode'}`}>
        {/*<div className='container'>*/}
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"/>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"/>
                            <input type="password" placeholder="Password"/>
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
                    <form onSubmit={event => check_same_pw(event)} action="#" className="sign-up-form">
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
                            <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="password" className="joinInput mt-20" name="password"/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"/>
                            <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="confirm_password" className="joinInput mt-20" name="confirm_password"/>
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
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="btn transparent" id="sign-up-btn" onClick={() => setIsSignUp(false)}>
                            Sign up
                        </button>
                    </div>
                    <img src="img/log.svg" className="image" alt=""/>
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button className="btn transparent" id="sign-in-btn" onClick={() => setIsSignUp(true)}>
                            Sign in
                        </button>
                    </div>
                    <img src="img/register.svg" className="image" alt=""/>
                </div>
            </div>

            <ScriptTag isHydrating={true} type="text/javascript" src="https://kit.fontawesome.com/64d58efce2.js"/>
        </div>


    // <div className='joinOuterContainer'>
    //         <div className='joinInnerContainer'>
    //             <h1 className='heading'>Login</h1>
    //             <form >
    //                 <div><input type="text" onChange={(e) => setName(e.target.value)} placeholder="name" className="joinInput" name="name"/></div>
    //                 <div><input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="email" className="joinInput" name="email"/></div>
    //                 <div><input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="password" className="joinInput mt-20" name="password"/></div>
    //                 <div><input type="text" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="confirm_password" className="joinInput mt-20" name="confirm_password"/></div>
    //                 <div><input type="submit" value="Submit" onClick={event => check_same_pw(event)}/></div>
    //             </form>
    //         </div>
    //     </div>
    )
}

export default Register;
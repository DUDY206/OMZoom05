import React, {useState} from 'react';
import ScriptTag from 'react-script-tag';
import './Authorize.scss';
import Login from './Login';
import Register from './Register';

import axios from 'axios';

const Authorize = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isSignUp,setIsSignUp] = useState(true);
    const [confirmPassword,setConfirmPassword] = useState('');

    const [loginName,setLoginName] = useState('');
    const [loginPassword,setLoginPassword] = useState('');
    const axios = require("axios");

    const reg_submit = (event) => {
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

    const login_submit = (event) => {
        event.preventDefault();
        console.log('login submit');
        axios
            .post("http://localhost:5000/login",{
                'name':loginName,
                'password':loginPassword
            }).then(res => {
                console.log(res.data);
                window.location = res.data.redirect;
            }).catch(err => {
                console.log(err);
        })

    }

    return (
        <div className="page-login">
            <div className={`container  ${isSignUp ? '' : 'sign-up-mode'} `}>
            {/*<div className='container'>*/}
            <div className="forms-container">
                <div className="signin-signup">
                    <Login
                        setLoginName={setLoginName}
                        setLoginPassword={setLoginPassword}
                        login_submit={login_submit}
                    />

                    <Register
                        setName={setName}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        setConfirmPassword={setConfirmPassword}
                        reg_submit={reg_submit}
                    />
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
        </div>

    )
}

export default Authorize;
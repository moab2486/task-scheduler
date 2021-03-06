import React from 'react';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";

function Login(){
    return(
        <div className="login-container">
            <div className="centered">
                <h5>Let's sign you in.</h5>
                <p className="pf">
                    Welcome back. <br />
                    You've been missed!
                </p>
            </div>


            <div className="input-wrapper">
                <label htmlFor="" className="input-label">Username</label>
                <div className="input-field">
                    <input type="text" name="" id="" className="form-control"/>
                </div>
            </div>

            <div className="input-wrapper mt">
                <label htmlFor="" className="input-label">Password</label>
                <div className="input-field">
                    <input type="password" name="" id="" className="form-control"/>
                </div>
            </div>

            <div className="checklist-wrapper">
                <input type="checkbox" name="" id="" className="input-checklist"/> Remember me
            </div>

            <div className="centered mt">
                <button className="btn-sm">Login</button>
            </div>

            <div className="mt">
                <Link to="/sign-up">Sign up</Link>
                <Link to="/forgot-password" className="float-right">Forgot password?</Link>
            </div>

            <div className="centered mt">
               <hr/> OR <hr />
            </div>

            <div className="input-wrapper mt">
                <button className="btn-xl">continue with google</button>
                <button className="btn-xl float-right">continue with facebook</button>
            </div>

            <div className="centered mt">
                <p>Courtesy MoaB@2020</p>
                <p>Designed by Abdulkadir</p>
            </div>
        </div>
    )
}

export default Login;
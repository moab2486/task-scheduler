import React from 'react';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";

function ForgotPassword(){
    return(
        <div className="login-container">
            <div className="centered">
                <h5>Did someone forgot thier password?</h5>
                <p className="pf">
                    That's ok! <br />
                    Just enter the email address that you've used to
                    register with us and we'll send you a reset link!
                </p>
            </div>


            <div className="input-wrapper">
                <label htmlFor="" className="input-label">Email</label>
                <div className="input-field">
                    <input type="text" name="" id="" className="form-control"/>
                </div>
            </div>

            <div className="centered mt">
                <button className="btn-sm">Submit</button>
            </div>

            <div className="mt">
                <Link to="/">Sign in</Link>
                <Link to="/forgot-password" className="float-right">Sign up</Link>
            </div>

            <div className="centered mt">
                <p>Courtesy MoaB@2020</p>
                <p>Designed by Abdulkadir</p>
            </div>
        </div>
    )
}

export default ForgotPassword;
import React from 'react';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";

function SignUP(){
    return(
        <div className="signin-container">
            <div className="centered">
                <h5>Let's get you registered today.</h5>
                <p className="pf">
                    Welcome back. <br />
                    You've been missed!
                </p>
            </div>

            <div className="col">
                <div className="input-wrapper mr-1">
                    <label htmlFor="" className="input-label">First name</label>
                    <div className="input-field">
                        <input type="text" name="" id="" className="form-control"/>
                    </div>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="" className="input-label">Last name</label>
                    <div className="input-field">
                        <input type="password" name="" id="" className="form-control"/>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="input-wrapper mr-1">
                    <label htmlFor="" className="input-label">Gender</label>
                    <div className="input-field">
                        <input type="text" name="" id="" className="form-control"/>
                    </div>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="" className="input-label">Phone number</label>
                    <div className="input-field">
                        <input type="password" name="" id="" className="form-control"/>
                    </div>
                </div>
            </div>

            <div className="input-wrapper mt">
                <label htmlFor="" className="input-label">Email</label>
                <div className="input-field">
                    <input type="password" name="" id="" className="form-control"/>
                </div>
            </div>

            <div className="mt-1">
                <button className="btn-sm">Register</button>
                <span className="float-right">
                    Already registered? <Link to="/">Sign in</Link>
                </span>
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

export default SignUP;
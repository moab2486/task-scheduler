import React from 'react';

function Login(){
    return(
        <div className="container">
            <div className="input-wrapper">
                <label htmlFor="" className="input-label">Username</label>
                <div className="input-field">
                    <input type="text" name="" id="" className="form-control"/>
                </div>
            </div>

            <div className="input-wrapper">
                <label htmlFor="" className="input-label">Password</label>
                <div className="input-field">
                    <input type="password" name="" id="" className="form-control"/>
                </div>
            </div>

            <div className="checklist-wrapper">
                <input type="checkbox" name="" id="" className="input-checklist"/> Remember me
            </div>

            <div className="submit-wrapper">
                <button className="btn-submit-button">Login</button>
            </div>

            <div className="sign-alt">
               <hr/> OR <hr />
            </div>

            <div className="submit-wrapper">
                <button className="btn-submit-button">continue with google</button>
            </div>
        </div>
    )
}

export default Login;
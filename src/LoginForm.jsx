import React, { useState } from "react";
import axios from "axios";
import SignUp from './SignUp'
import "./login.css";
import {BiLock} from "react-icons/bi"
import {BsFillEnvelopeFill} from "react-icons/bs"
import {BiLogIn} from "react-icons/bi"
import "./credentials.css";


function LoginForm(props) {
const [showLogin, setShowLogin] = useState(true);
const [showSignup, setShowSignup] = useState(false);
const [loginSubmitted, setLoginSubmitted] = useState(false);
const [signupSubmitted, setSignupSubmitted] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loginError, setLoginError] = useState("");

const handleSubmit = (event) => {
event.preventDefault();
const registered = {
email: email,
password: password,
};
        axios.post('http://localhost:4000/app/Login', registered)
             .then(response => {
              console.log(response.data);
              props.onLogin(response.data.token);
              setEmail('');
              setPassword('')
              setLoginSubmitted(true);
             })
        .catch(error => {
          console.log(error);    
  });
};

const handleEmailChange = (event) => {
setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
setPassword(event.target.value);
};

const handleLoginClick = () => {
setShowLogin(true);
setShowSignup(false);
setLoginSubmitted(false);
setSignupSubmitted(false);
setLoginError("");
};

const handleSignupClick = () => {
setShowSignup(true);
setShowLogin(false);
setLoginSubmitted(false);
setSignupSubmitted(false);
setLoginError("");
};

return (
  
  <><i></i><i></i><i>
    </i><i></i>
  <div className="container">
    {showLogin && !loginSubmitted && (
      <form onSubmit={handleSubmit} id="survey-form">
        <label htmlFor="email"><BsFillEnvelopeFill/>Email:</label> 
        <input type="email" id="email" className="input-field" value={email} placeholder="Enter your email" onChange={handleEmailChange} required />
        <label htmlFor="Password"><BiLock/>Password:</label>
        <input type="text" id="Password" className="input-field" value={password} placeholder="Enter Password"
          onChange={handlePasswordChange} required />
        <div className="forgot password">
          <a href="#">Forgot Password?</a>
        </div>
        {loginError && <p style={{ color: "red" }}>{loginError}</p>}
        <input type='submit' className='btn btn-danger btn-block' value='Login' />
        {!loginSubmitted && !signupSubmitted && (
      <div className="button-group">
        <p>Don't have an account?</p><a href ="#"style={{ marginRight: "200px" }} onClick={handleSignupClick}>SignUp</a>
      </div>)}
      </form>
    )}
    {showSignup && !signupSubmitted && <SignUp />}
  </div></>
);
}
export default LoginForm;
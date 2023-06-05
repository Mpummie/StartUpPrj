import { useState } from 'react';
import axios from 'axios';
// import './Survey.css';
import LoginForm from './LoginForm';
import {BiLock} from "react-icons/bi"
import {BsFillEnvelopeFill} from "react-icons/bs"
import "./credentials.css"

function SignUp() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [submitted, setSubmitted] = useState(false);
 const [signupsuccess, setSignupsuccess] = useState(false);
 const [showForm, setShowForm] = useState(true);

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }
   
    const changePassword = (event) => {
      setPassword(event.target.value);
  }
    const handleSubmit = (event) => {
        event.preventDefault();
        const registered = {
            email: email,
            password: password

            
        };
        axios.post('http://localhost:4000/app/signUp', registered)
             .then(response => {
              console.log(response.data);
              setEmail('');
              setPassword('');
              setSubmitted(true);
              setSignupsuccess(true);
              setShowForm(false);
             })
        .catch(error => {
          console.log(error);    
  });

};

return (
  <>
    {showForm && (
      <>
        <br></br>
        <form onSubmit={handleSubmit} id="survey-form">
          <div className="labels">
            <label htmlFor="email"><BsFillEnvelopeFill/>Email:</label>
          </div>
          <div className="input-tab">
            <input
              type="email"
              id="email"
              className="input-field"
              value={email}
              placeholder="Enter your email"
              onChange={changeEmail}
              required
            />
          </div>
          <div className="labels">
            <label htmlFor="Password"><BiLock/>Password:</label>
          </div>
          <div className="input-tab">
            <input
              type="text"
              id="Password"
              className="input-field"
              value={password}
              placeholder="Enter Password"
              onChange={changePassword}
              required
            />
            {submitted && (
              <h5 style={{ color: "darkGreen", textAlign: "center" }}>
                Registered successfully!
              </h5>
            )}
            <input
              type="submit"
              className="btn btn-danger btn-block"
              value="signUp"
            />
          </div>
        </form>
      </>
    )}
    {signupsuccess && <LoginForm />}
  </>
);
};

export default SignUp;

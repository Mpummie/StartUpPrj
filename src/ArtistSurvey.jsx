import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import "./Survey.css";

function Artist() {
  const [answer, setAnswer] = useState('');
  const [dropdown,setDropdown ]= useState('default');
  const [genre, setgenre] = useState(
    {
      option1: false,
      option2: false,
      option3: false,
      option4: false,
      option5: false,
    }
  );
  const [ratings, setRatings] = useState(1);
  const [submitted, setSubmitted] = useState(false); 
  const [isChecked, setIsChecked] = useState("YES");
  const [showPopup, setShowPopup] = useState(false);

  const [feedbacks, setfeedbacks] = useState('');
  

  const handleDropdown= (event) => {
    setDropdown(event.target.value);
  };

  const handleisChecked= (event) => {
    setIsChecked(event.target.value);
  };

  const handleRatings = (event) => {
    setRatings(event.target.value);
  };
   
  const handlegenre=  (event) => {
     setgenre({
      ...genre,
      [event.target.name]: event.target.checked,});
 };

  const handlefeebacks = (event) => {
    setfeedbacks(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const registered = {
      answer,
      genre,
      dropdown,
      isChecked,
      feedbacks,
      ratings
    };

    axios.post('http://localhost:4000/app/AN', registered)
      .then(response => {
        console.log(response.data);
        setAnswer('');
        setDropdown('default');
        setgenre( {
          option1: false,
          option2: false,
          option3: false,
          option4: false,
          option5: false,
        }); 
        setIsChecked(isChecked);
        setRatings('');
        setSubmitted(true);
        setfeedbacks('');
        setShowPopup(true); 
        setTimeout(() => {
        setShowPopup(false);
  },     2000);

      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handlechangeAnswer = (event) => {
    setAnswer(event.target.value);
  };


    return(
        <>
            {showPopup && <div className="popup">Thank you for submitting</div>}
        <form style={{alignContent:"center", alignItems:"center", maxWidth:"600px", marginLeft:"500px"}} >
      
          <label htmlFor="GoToArtist">&#8727; Who is your Go to Artist?</label>
          <input type="text" value={answer} onChange ={handlechangeAnswer} className="input-field" placeholder="Artist" />

          <label htmlFor="dropdown">&#8727; An emotion evoked when listening to this Artist:</label>
          <select value={dropdown} onChange={handleDropdown}>
            <option value="default" disabled >select an option...</option>
            <option>Nostalgia</option>
            <option>Happiness</option>
            <option>Sadness</option>
            <option>Gratitude</option>
            <option>Prefer not to say</option>
            <option>Other</option>
          </select>
       
        <div id="question" className="labels">
          <br/>
      <label htmlFor="genre">&#8727; What is your favourite Genre?</label>
    </div>
    <input type="checkbox" checked = {genre.option1}
          onChange={ handlegenre} 
          name="option1"
          /> Gospel 
      <br />
      <input type="checkbox" checked = {genre.option2}
          onChange={ handlegenre} 
          name="option2" 
          /> Soul 
      <br/>
      <input type="checkbox" checked = {genre.option3}
          onChange={ handlegenre} 
          name="option3"
          /> RnB
      <br/>  
     <input type="checkbox" checked = {genre.option4}
          onChange={ handlegenre} 
          name="option4"
          /> Afro-Pop
      <br/>
      <input type="checkbox" checked = {genre.option5}
          onChange={ handlegenre} 
          name="option5"     
          /> Other 
      <label htmlFor="dropdown"> &#8727; On a scale of 1 to 10, how do you rate your weekly playlist?
        </label>
        <input 
  type="range" 
  value={ratings} 
  name="ratings" 
  min="1" 
  max="10" 
  onChange={ handleRatings} 
/>
         <label> &#8727; Would you like to subscribe to our weekly recommended playlist of your favourite Genre?</label>
        <label><input type="radio" 
      name="genre" 
      value="YES" 
      checked={isChecked==="YES"}
      onChange= { handleisChecked}
      />
      YES</label>
        <label><input type="radio" 
      name="genre" 
      value="NO" 
      checked={isChecked==="NO" }
      onChange= {handleisChecked}
      />
      NO</label>
           <h4> &#8727; Your feedback is appreciated, so don't forget to give us your additional comments</h4>
          <textarea id="LastName" className="input-field" value={feedbacks} onChange={handlefeebacks} required />
         <button onClick={handleSubmit} className="btn btn-danger btn-block">Submit</button>
 </form>
    </>
    );
  };

export default Artist;



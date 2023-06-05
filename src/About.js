import React from "react";
import {FaMusic} from "react-icons/fa";
import {Link } from "react-router-dom";

const About =() => {
    return(
        <div>
        <h1 style={{ marginTop: "10px", color: "rgb(170, 80, 134)", marginLeft: "300px" }}>WELCOME TO OUR MUSIC PLAYLIST SURVEY<FaMusic/></h1> 
        <p>Music speaks what cannot be expressed,soothes the mind and gives it rest, heals the heart and makes it whole. 
         Flows from heaven to the soul.It is said that music is a higher revelation than all wisdom and philosophy.</p>
         <p>This survey is all about that, we are interested in knowing your playlist for research purposes. We would very much appreciate 
            it if you can take the survey</p>

            <Link to="/survey">
        <button>Start Survey</button>
      </Link>
   </div>
   
    );
}

export default About;
import React from "react";
import homescreen from "./homescreen.png";
import selectroom from "./selectroom.png";
import dashboard from "./dashboard.png";
import {Link} from 'react-router-dom'
const Sketchful = () => {
  return (
    <div className="sketchful-container">
    
      <div className="sketchful-body animated zoomIn">
      
        <h1>Sketchful - An interactive drawing and chat app</h1> 
        <span>
          Sketchful is an interactive drawing and chat app that utilizes sockets
          to update live in real time to other clients. We were given 2 weeks in
          total class time and 1 week of break to complete our personal projects
          at DevMountain. I wanted to do something unique and also something I
          was going to enjoy making. I had to teach myself how to use socket.io
          to update in real time to other clients. This project also won "Most
          Technical" out of my cohort.
        </span>
        <h1>Technolgies Used</h1>
        <span>
          React • Redux • Styled Components • HTML • Socket.io • Node.js •
          Express.js • PostgreSQL • Auth0
        </span>
        <div className="img-container">
          <img className="sketchful-images" src={homescreen} alt="" />

          <img className="sketchful-images" src={selectroom} alt="" />

          <img className="sketchful-images" src={dashboard} alt="" />
        </div>

       <Link to='/' ><i class="fas fa-arrow-circle-left fa-2x"></i></Link> 
      </div>
      
    </div>
  );
};

export default Sketchful;

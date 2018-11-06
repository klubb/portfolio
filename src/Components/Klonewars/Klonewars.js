import React from "react";
import loginscreen from './loginscreen.png'
import dashboard from './kdashboard.png'
import challenges from './kchallenges.png'
import challenge from './kchallenge.png'
import profile from './kprofile.png'
import {Link} from 'react-router-dom'

const Klonewars = () => {
  return (
    <div className="sketchful-container">
  
      <div className="sketchful-body animated zoomIn">
        <h1>Kodewars - A spin off of the popular site "Codewars"</h1> 
        <span>
        <strong>Complete coding challenges</strong> - Push your skills to the limit as you complete harder and harder challenges. Unit tests will verify that your code passes the challenge, or give you insight into what needs changing in your code.
        </span>
        <span>
        <strong>Create challenges</strong> - Have an interesting challenge? Create your own, with unit tests and a working solution, to push your peers to improve their skills.
        </span>
        <span>
        <strong> Compare your skills with others</strong> - Completing challenges increases your score and allows you to rank up. See how you measure up to others in the leaderboard and work your way up to the top!
        </span>
        <span>
        <strong>Track your progress</strong> - Profile page tracks your completed challenges and solutions, as well as other statistics. Update your bio, share your profile with friends, and view other competitor's accomplishments.
        </span>
        <h1>Technolgies Used</h1>
        <span>
          • React • Redux • Styled Components • HTML • Socket.io • Node.js •
          Express.js • PostgreSQL • Auth0
        </span>
        <div className="img-container">
          <img className="sketchful-images" src={loginscreen} alt="" />

          <img className="sketchful-images" src={dashboard} alt="" />

          <img className="sketchful-images" src={profile} alt="" />
          <img className="sketchful-images" src={challenges} alt="" />
          <img className="sketchful-images" src={challenge} alt="" />
        </div>

       <Link to='/' ><i class="fas fa-arrow-circle-left fa-2x"></i></Link> 
      </div>
    </div>
  );
};

export default Klonewars;

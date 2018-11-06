import React, { Component } from "react";
import Logo from "./programming.png";
// import devmtn from "./devmtn.png";
import personal from "./laptops.png";
import scrollToComponent from "react-scroll-to-component";
import {Link} from 'react-router-dom'
import kodewars from './kodewars.png'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="header">
          <img className="k" src={Logo} alt="" />
          <div className="spans">
           
            <span
              onClick={() => scrollToComponent(this.skills)}
              className="work"
            >
              Skills
            </span>
            <span
              onClick={() => scrollToComponent(this.projects)}
              className="work"
            >
              Projects
            </span>
           
            <Link to='/about'><span className="work">About</span></Link>
            <a target="_blank" href="https://github.com/klubb">
              <i class="fab fa-github fa-2x" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/kaleb-manley/">
              {" "}
              <i class="fab fa-linkedin fa-2x" />
            </a>
          </div>
        </div>

        <div className="container">
          <div className="description animated fadeInRight faster">
            <p className="desc">
              I'm Kaleb Manley, a full stack{" "}
              <span className="bluetext">Web Developer</span> living in Utah,
              seeking an opportunity to utilize skills in development.
            </p>
          </div>
        </div>

        {/* <div className="experience">
              <span className='current'>CURRENTLY:</span>
              <img className="devmtn" src={devmtn} alt="" />
             </div> */}

        <div
          ref={section => {
            this.projects = section;
          }}
          className="projectcontainer"
        >
          <h1 className="name">Projects</h1>
          <div className="projects">
            <div className="personal">
              <div className="idk">
                <div className="idk2">
                  <img className="laptop" src={personal} alt="" />
                  <div className="buttons">
                    <a target="_blank" href="https://sketchful.live/#/">
                      <button>Live Site</button>
                      
                    </a>
                    <a target="_blank" href='https://github.com/klubb/sketchful'> <button>GitHub Repo</button></a>
                    <Link to='/sketchful'><button>More...</button></Link>
                  </div>
                </div>

                <div className="info">
                  <h1>Sketchful</h1>
                  <p className='project-description'>
                    An interactive drawing and chat app that utilizes sockets to
                    update live in real time to other clients.
                  </p>
                  <p>Won "Most Technical" awarded by DevMountain.</p>
                  <p>
                    Used Redux to manage user data, Socket.io to update data in
                    real time and stored everything in a database on the back
                    end.
                  </p>
                </div>
              </div>
            </div>

            <div className="personal">
              <div className="idk">
                <div className="idk2">
                  <img className="laptop" src={kodewars} alt="" />
                  <div className="buttons">
                    <a
                      ref={section => {
                        this.projects = section;
                      }}
                      target="_blank"
                      href="https://kodewars.net/#/"
                    >
                      <button>Live Site</button>
                      
                    </a>
                    <a target="_blank" href='https://github.com/KennyCrump/clone-wars'> <button>GitHub Repo</button></a>
                    <Link to='/kodewars'><button>More...</button></Link>
                    
                    
                  </div>
                </div>

                <div className="info">
                  <h1>Kode Wars</h1>
                  <p>
                  A CodeWars inspired Javascript Challenge Workspace to help people push their JavaScript Skills to the next level.
                  Complete coding challenges, create challenges, compare your skills with others and track your progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="skills-container">
          <h1>Skills</h1>
          
          <div
            ref={section => {
              this.skills = section;
            }}
            className="skills"
          >
            {/* <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Express</li>
                <li>Socket.io</li>
                <li>Node</li>
              </ul> */}
            {/* <i class="fab fa-react fa-5x" />
            <i class="fab fa-js-square fa-5x" />
            <i class="fab fa-html5 fa-5x" />
            <i class="fab fa-css3-alt fa-5x" />
            <i class="fab fa-node fa-5x" /> */}
            <div className="skillbox">
              <h1>Front end</h1>
              <div className="front">
              <h3 className='skillsbutton'>Javascript</h3>
              
            <h3 className='skillsbutton'>React</h3>
            <h3 className='skillsbutton'>Redux</h3>
            <h3 className='skillsbutton'>HTML</h3>
            <h3 className='skillsbutton'>CSS</h3>
            <h3 className='skillsbutton'>Sass</h3>
              </div>
              <h1>Backend</h1>
              <div className="front">
              
              
            <h3 className='skillsbutton'>Express.js</h3>
            <h3 className='skillsbutton'>Node.js</h3>
            <h3 className='skillsbutton'>Massive.js</h3>
            <h3 className='skillsbutton'>PostgreSQL</h3>
            
              </div>
              <h1>Source Control</h1>
              <h3 className='skillsbutton'>Git</h3>
            </div>

          
            
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

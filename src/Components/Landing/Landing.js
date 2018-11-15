import React from 'react';
import './Landing.css'

const Landing = (props) => {
    return (
        <div id='landing-container'>
            <div id='landing-info'>
                <h1 className='landing-header'>Full Stack Web Developer</h1>
                <div className="animated-wordscontainer">
                    <div className="landing-subheader">LOVES CODING</div>
                    <div className="middle">+</div>
                    <div id='landing-spacer'>
                        <div className="landing-subheader animated-words">
                            <span className='am1'>Video Games</span>
                            <span className='am1'>Ping Pong</span>
                            <span className='am1'>Going Outside</span>
                        </div>
                    </div>
                </div>
                <button className='landing-button' onClick={() => props.click('ProjectsScroll')}>See My Work</button>
            </div>
        </div>
    );
}

export default Landing;
import React from 'react';
import './Skills.css'

const Skills = () => {
    return ( 
        <div id='skills-container'>

        <div className="skillsbody">
        
            <div className="skills-header">
            <h1 className='skills'>Skills</h1>
            </div>

            <div className='skills-section'>
                    <h1 className='myskills'>My Abilities</h1>
                <h1 className='blacky'>FRONT END</h1>
                <p align='right'>JavaScript ES6 • React • Redux • HTML  • CSS  • CSS in JS</p>
                <h1 className='blacky'>BACK END</h1>
                <p align='right'>Node • Express • Massive • PostgreSQL • Socket.io </p>
                <h1 className='blacky'>ADDITIONAL</h1>
                <p align='right'>Git • Jest • RESTful API • Photoshop</p>
            </div>
        </div>
        </div>
     );
}
 
export default Skills;
import React from 'react';
import './Projects.css'
import mac from './mackodewars.png'

const Projects = () => {
    return ( 
        <div id='projects-container'>
            <div className="projects-header">
            <h1 className='projects'>Projects</h1>
            </div>
            <div className='project-section'>
                <h1 className='blacky'>SKETCHFUL</h1>
                <p>An interactive drawing and chat app that utilizes sockets to update live in real time to other clients.</p>
                <br/>
                <p>Won "Most Technical" awarded by DevMountain.</p>
                <button className='project-button'>View More</button>
            </div>
                    <br/><br/><br/><br/>
            <div className='project-section'>
                <h1 className='blacky'>KODEWARS</h1>
                <p>A CodeWars inspired Javascript Challenge Workspace to help people push their JavaScript Skills to the next level. Complete coding challenges, create challenges, compare your skills with others and track your progress</p>
                <br/>
               
                <button className='project-button2'>View More</button>
            </div>
        </div>
     );
}
 
export default Projects;
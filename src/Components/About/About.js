import React from 'react';
import './About.css'

const About = () => {
    return (
        <div id='about-container'>
            <div className="about-header">
                <h1 className='aboutme'>ABOUT ME</h1>
            </div>
            <div className='about-section'>
                <h1 className='whitey'>KALEB MANLEY</h1>
                <p>I am a Full Stack Web Developer by trade and passionate about coding, designing and making new things come to life on the screen.</p>
                <br />
                <p>I seem to have an eye for design and user experience. I enjoy working with UI/UX to make sure designs are functional, accessible, and give the intended experience.</p>
                <br />
                <p>I worked as a framer for a little over 2 years and wanted to do something else with my life, so I looked into a coding bootcamp called DevMountain and graduated from there. I have been coding ever since.</p>
                <br />
                <p>When I'm not coding, I am watching basketball, playing video games or at the gym.</p>
                {/* <button className='about-button'>View More</button> */}
            </div>

        </div>
    );
}

export default About;
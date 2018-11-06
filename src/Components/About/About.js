import React from 'react';
import Kaleb from './egg.jpg'
import {Link} from 'react-router-dom'

const About = () => {
    return ( <div id='about-view'>
    <div id='about-content' className='animated fadeInRight faster'>
        <h1 id="about-title">About Me</h1>
        <img src={Kaleb} alt='Jake' id='about-picture' />
        <h2 className='project-name'>Kaleb Manley</h2>
        <h3 style={{ marginTop: '-15px' }}>Full Stack <span className='bluetext'>Web Developer</span></h3>
        <p className='project-description'>
            My name is Kaleb Manley, a Full Stack Web Developer living in Utah. I am a recent graduate from DevMountain, a coding bootcamp specializing in all the current web technologies. I offer a creative mindset and am passionate about web development. I'm excited to contribute to this field and ready to get started.
        </p>
        <p className='project-description'>
            In my free time I like to watch and play basketball and go to the gym. I also enjoy playing video games.
            </p>
            <br/>
        <h2>Contact Me </h2>
        <h3>kalebamanley@gmail.com</h3>
        <Link to='/' ><i class="fas fa-arrow-circle-left fa-2x"></i></Link> 
    </div>
    
</div>
 );
}
 
export default About;
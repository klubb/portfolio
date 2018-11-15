import React from 'react';
import './Contact.css'

const Contact = () => {
    return ( 
        <div id='contact-container'>

        <div className="contactbody">
        
            <div className="contact-header">
            <h1 className='contact'>contact</h1>
            </div>

            <div className='contact-section'>
                    <h1 className='mycontact'>Reach me here</h1>
                    
                <a target="_blank" href='https://www.linkedin.com/in/kaleb-manley/'><button className='contact-button'>Linkedin</button></a>
                <a target="_blank" href='https://github.com/klubb'> <button className='contact-button'>Github</button></a>
                <a href="mailto:kalebamanley@gmail.com"><button className='contact-button'>email</button></a>
                <h1 className='mycontactnum' >801-709-4117</h1>
                
            </div>
        </div>
        </div>
     );
}
 
export default Contact;
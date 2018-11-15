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
                    
                <button className='contact-button'>Linkedin</button>
                <button className='contact-button'>Github</button>
                <button className='contact-button'>email</button>
                <h1 className='mycontactnum' >801-709-4117</h1>
                
            </div>
        </div>
        </div>
     );
}
 
export default Contact;
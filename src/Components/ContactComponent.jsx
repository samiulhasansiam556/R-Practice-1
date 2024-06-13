import React from 'react';
import '../Css/Contact.css'
import contact from '../Pictures/Contact2.avif'
function ContactComponent(props) {
    return (
   
         <div className="contact-container">

            <h2>Contact Us</h2>

        <div className='contact'>
            <form>
                <div className="form1">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" cols="50"></textarea>

                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
            
            <div className="image-container">
                <img src={contact} alt="Placeholder" />
            </div>
        </div>
        
        </div>
    );
}

export default ContactComponent;

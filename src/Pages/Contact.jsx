import React from 'react';
import Nav from '../Components/Nav';
import ContactComponent from '../Components/ContactComponent';
import Footer from '../Components/Footer';


function Contact(props) {
    return (
        <div>
            <Nav/>
            <ContactComponent/>
            <Footer/>
          
        </div>
    );
}

export default Contact;
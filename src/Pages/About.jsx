import React from 'react';
import Nav from '../Components/Nav';
import AboutComponent from '../Components/AboutComponent';
import Footer from '../Components/Footer';


function About(props) {
    return (
        <div>
            <Nav/>
            <AboutComponent/>
            <Footer/>
        </div>
    );
}

export default About;
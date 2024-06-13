import React from 'react';
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import MostPP from '../Components/MostPP';
import Mostpp2 from '../Components/Mostpp2';
import Contact from '../Components/ContactComponent';
import Footer from '../Components/Footer';
import Add from '../Components/Add';

function Home() {

    return (
        <div>
            <Nav/>
            <Hero/>
            <MostPP/>
            <Add/>
            <Mostpp2/>
            <Contact/>
            <Footer/>
            
        
        </div>
    );
}

export default Home;
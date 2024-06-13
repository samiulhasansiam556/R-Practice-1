import React from 'react';
import '../Css/Home.css'
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import MostPP from '../Components/MostPP';

function Home() {

    return (
        <div className='mainDiv'>
            <Nav/>
            <Hero/>
            <MostPP/>
        </div>
    );
}

export default Home;
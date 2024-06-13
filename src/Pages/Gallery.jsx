import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import GalleryComponent from '../Components/GalleryComponent';


function Gallery(props) {
    return (
        <div>
            <Nav/>
            <GalleryComponent/>
            <Footer/>
        </div>
    );
}

export default Gallery;
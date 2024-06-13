import React from 'react';
import ReactDOM from "react-dom/client";
import {Link} from 'react-router-dom';
import '../Css/Nav.css';

function Nav() {
    return (
        <div className='navBar'>
           <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Packages">Package</Link></li>
                <li><Link to="/Gallery">Gallery</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/About">About</Link></li>
            
           </ul>
        </div>
    );
}

export default Nav;


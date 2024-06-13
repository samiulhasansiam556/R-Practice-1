import React from 'react';
import '../Css/Footer.css'

function Footer() {
    return (
        <footer className="mainfooter">
            <div className="social-media">
                <a href="https://facebook.com/samiulhasansiam556" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/samiulhasansiam556" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/samiulhasansiam556" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://wa.me/YOURsamiulhasansiam556" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://linkedin.com/in/samiulhasansiam556" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
            <div className="footer-nav">
                <a href="/">Home</a>
                <a href="/About">About</a>
                <a href="/contact">Contact</a>
                <a href="/Packages">Package</a>
                <a href="/Gallery">Gallery</a>
               
            </div>
            <div className="subscribe">
                <input type="email" placeholder="Subscribe to our newsletter" />
                <button type="button">Subscribe</button>
            </div>
            <p>&copy; 2024 Travel Agency. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
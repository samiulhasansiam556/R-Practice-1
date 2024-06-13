import React, { useState } from 'react';
import '../Css/About.css';

function AboutComponent() {
    const [showMore, setShowMore] = useState(false);

    const toggleMoreInfo = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="about-us-container">
            <header className="header">
                <h1>Welcome to Our Travel Agency</h1>
            </header>

            <section className="about-us">
                <h2>About Us</h2>
                <p>We are a travel agency dedicated to providing the best travel experiences for our clients. With over 10 years of experience in the industry, we offer personalized travel packages, exclusive deals, and exceptional customer service.</p>
                <p>Our mission is to make your travel dreams come true. Whether you're looking for a relaxing beach vacation, an adventurous trek, or a cultural exploration, we have something for everyone.</p>
                
                <button onClick={toggleMoreInfo} className="learn-more-button">
                    {showMore ? 'Show Less' : 'Learn More'}
                </button>

                {showMore && (
                    <div className="more-info">
                        <p>We specialize in destinations all around the world, offering everything from budget-friendly trips to luxury getaways. Our team of experienced travel agents is here to assist you every step of the way, ensuring a seamless and enjoyable travel experience.</p>
                        <p>Contact us today to start planning your next adventure!</p>
                    </div>
                )}
            </section>

    
        </div>
    );
}

export default AboutComponent;

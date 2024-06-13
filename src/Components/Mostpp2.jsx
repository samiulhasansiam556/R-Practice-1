import React from 'react';
import '../Css/Mostpp2.css'
import event1 from '../Pictures/kashmirm.jpg'
import event2 from '../Pictures/saintmartine.jpg'
import event3 from '../Pictures/maldive.jpg'


function Mostpp2(props) {
    return (
        <div className='Mostpp2'>

             <h2>Upcoming Event</h2>
                <div className="Event">
                    <div className="event1">
                        <img src={event1} alt="event1" />
                        <div className="Eventdetails">
                            <h3>Kashmir</h3>
                            <span>Ratting 4.9.5</span>
                            <p>Date : 22.06.2024</p>
                        
                            <p className='duration'>Duration : 7 Days</p>
                            <p className='price'>Price : 15000</p>
                            <button className='goingon'>Going On</button>
                        </div>
                    
                    </div>
                    <div className="event1">
                        <img src={event2} alt="event1" />
                        <div className="Eventdetails">
                            <h3>Saintmartin</h3>
                            <span>Ratting 4.9.5</span>
                            <p>Date : 22.06.2024</p>
                    
                            <p className='duration'>Duration : 7 Days</p>
                            <p className='price'>Price : 15000</p>
                            <button className='goingon'>Going On</button>
                        </div>
                    
                    </div>
                    <div className="event1">
                        <img src={event3} alt="event1" />
                        <div className="Eventdetails">
                            <h3>Maldiv</h3>
                            <span>Ratting 4.9.5</span>
                            <p>Date : 22.06.2024</p>
                            <p className='duration'>Duration : 7 Days</p>
                            <p className='price'>Price : 15000</p>
                            <button className='goingon'>Going On</button>
                        </div>
                    
                    </div>

                </div>
        </div>
    );
}

export default Mostpp2;
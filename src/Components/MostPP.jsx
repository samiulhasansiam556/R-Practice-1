import React from 'react';
import '../Css/MostPP.css'

import maldiv from '../Pictures/maldivm.jpg';
import kashmire from '../Pictures/kashmire.avif';
import sainmartin from '../Pictures/sainmartinm.avif';




function MostPP(props) {
    return (
        <div className='MostPP'>
            <h2 className='Mh2'>Most Popular Places</h2>
            

           <div className="mainBox">
                   <div className="box1">
                    <img src={maldiv} alt="img1" className="img1" />
                     <h2>Maldive</h2>
                     <p>Maldives is a tropical nation in the Indian Ocean composed of 26 ring-shaped</p>
                     <i className ="heart1 fa-solid fa-heart"></i>
                   </div>
                   <div className="box1">
                   <img src={kashmire} alt="img1" className="img1" />
                   <h2>Kashmire</h2>
                   <p>Kashmir is a region located in the Indian subcontinent in the vicinity of the</p>
                   <i className ="heart1 fa-solid fa-heart"></i>
                   </div>
                   <div className="box1">
                      <img src = {sainmartin}  alt="img1" className="img1" />
                      <h2>Saintmartine</h2>
                      <p>Saint Martin is an island in the northeastern Caribbean, divided into two separate countries</p>
                      <i className ="heart1 fa-solid fa-heart"></i>
                   </div>
                  
                   
                    
           </div>
 

        </div>
    );
}

export default MostPP;
import React from 'react';
import Carrousel from './Carrousel';
import './slide.css';
import TimeUntil from './TimeUntil';



const Featured = () => {
    return (

        <div stlye={{position: 'relative'}}>

            <Carrousel />


            <div className="artist_name">
                <div className="wrapper">
                    The Band
                </div>
            </div>
        
            <TimeUntil />
        
        </div>
    )
}   

export default Featured;

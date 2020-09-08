import React from 'react';

const  Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.0050151353507!2d14.469323615979029!3d50.0674677227667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9374265a6d39%3A0x259f84196f3eca1!2sSinobo%20Stadium!5e0!3m2!1scs!2scz!4v1598287377917!5m2!1scs!2scz" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen="" 
                aria-hidden="false" 
                tabIndex="0"
                
            />

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    )
}

export default Location;

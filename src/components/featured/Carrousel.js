import React, { Component } from 'react';
import Slideshow from "./Slideshow";

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

//Creates style object
const s = {
    container: "screenW screenH dGray col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};

// creates array with slide data
const slides = [slide_one, slide_two, slide_three];
    
class Carrousel extends Component {

    


    render() {

        

        return (

            
                <div className={s.container}>
                                
                    <div className={s.main}>
                        <Slideshow slides={slides} />
                    </div>
                                
                </div>
                        
    
        );
}
}

export default Carrousel;

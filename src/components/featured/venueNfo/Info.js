import React from 'react';
import Roll from 'react-reveal/Roll';
import icon_calendar from '../../../resources/images/icons/calendar.png';
import icon_location from '../../../resources/images/icons/location.png';


const Info = () => {
    return (
        <div className="bck_black">

            <div className="center_wrapper">

                <div className="vn_wrapper">

                    <Roll bottom delay={800}>

                    <div className="vn_item">

                        <div className="vn_outer">

                            <div className="vn_inner">
                                <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_calendar})`
                                        }}
                                    
                                    >
                                    </div>
                                    

                                    <div className="vn_title">
                                            Event Date & Time
                                    </div>

                                    <div className="vn_desc">
                                            25 November 2020 @11.00pm
                                    </div>
                                
                            </div>

                        </div>

                    </div>

                    </Roll>

                    <Roll bottom delay={1000}>

                    <div className="vn_item">

                        <div className="vn_outer">

                            <div className="vn_inner">
                                <div className="vn_icon_square bck_yellow"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_location})`
                                        }}
                                    
                                    >
                                    </div>
                                    

                                    <div className="vn_title">
                                            Event Location
                                    </div>

                                    <div className="vn_desc">
                                           Eden Arena Slavia Prague
                                    </div>
                                
                            </div>

                        </div>

                    </div>

                    </Roll>

                </div>

            </div>

        </div>
    )
}

export default Info;

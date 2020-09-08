import React, { useEffect, useRef, useState } from 'react';
import Slide from 'react-reveal/Slide';

const TimeUntil =() =>  {

   const [timerDays, setTimerDays] = useState('00');
   const [timerHours, setTimerHours] = useState('00');
   const [timerMinutes, setTimerMinutes] = useState('00');
   const [timerSeconds, setTimerSeconds] = useState('00');

   let interval = useRef();

   const startTimer = () => {
       const countdownDate = new Date('Nov 25 2020 00:00:00').getTime();

       interval = setInterval(() => {
           const now = new Date().getTime();
           const distance = countdownDate - now;

           const days = Math.floor(distance / (1000 * 60 * 60 * 24));
           const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
           const minutes = Math.floor(distance % ((1000 * 60 * 60))/ (1000 * 60));
           const seconds = Math.floor(distance % ((1000 * 60)) / 1000);

           if(distance < 0) {
                //stop the timer
                clearInterval(interval.current);
           } else {
               //update timer
               setTimerDays(days);
               setTimerHours(hours);
               setTimerMinutes(minutes);
               setTimerSeconds(seconds);
           }

       }, 1000);
   }

        //componentdidMount

        useEffect(() => {
            startTimer();
            return () => {
                clearInterval(interval.current);
            }
        });
    
        return (

            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event Starts in
                    </div>

                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {timerDays}
                            </div>
                            
                            <div className="countdown_tag">
                                Days
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                {timerHours}
                            </div>
                            
                            <div className="countdown_tag">
                                Hours
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                {timerMinutes}
                            </div>
                            
                            <div className="countdown_tag">
                                Minutes
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                {timerSeconds}
                            </div>
                            
                            <div className="countdown_tag">
                                Seconds
                            </div>
                        </div>
                        
                    </div>

                </div>
            </Slide>   
        )
    }


export default TimeUntil;
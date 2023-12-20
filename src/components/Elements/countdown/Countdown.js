import { useState,useEffect } from 'react';
import React from "react"
import './Countdown.css';
export default function Countdown(){
    const calculateTimeLeft = () => {
        const now = new Date();
        const targetDate = new Date('2024-02-22T10:00:00'); // Set your target date and time here
        const difference = targetDate - now;
    
        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
          return { days, hours, minutes, seconds };
        } else {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);
    return<>
            <div className="cd-container text-center">
                <h2>Morocco vs Croitie</h2>
                <h4>Sunday, 21 January 2030</h4>
                <div className='cd-time'>
                    <div className='time-elem'>
                        <h2>{timeLeft.days}</h2> 
                        <h5>DAY</h5>
                    </div>
                    <div className='time-elem'>
                        <h2>:</h2>
                    </div>
                    <div className='time-elem'>
                        <h2>{timeLeft.hours}</h2> 
                        <h5>HOUR</h5>
                    </div>
                    <div className='time-elem'>
                        <h2>:</h2>
                    </div>
                    <div className='time-elem'>
                        <h2>{timeLeft.minutes}</h2> 
                        <h5>MINUTES</h5>
                    </div>
                    <div className='time-elem'>
                        <h2>:</h2>
                    </div>
                    <div className='time-elem'>
                        <h2>{timeLeft.seconds}</h2> 
                        <h5>SECONDS</h5>
                    </div>
                </div>
            </div>
    </>
}
import React from 'react'
import './Hero.scss'

const Hero = (info) => {
    console.log(info);
    function identifyTheWeekDay(time){
        switch(time){
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday"
            default:
                return "Sunday"
        }
    }
    return (
        <div className='weather-banner'>
            <div className="main-weather-info-wrapper">
                <div className="main-weather-info">
                    <img src={info.current?.condition.icon} alt="" id="weather-state-icon" />
                    <h2 className="weather-state-celcius">{Math.floor(info.current?.temp_c)}°</h2>
                    <p className="weather-state-location">{`${info.location?.country}, ${info.location?.name}`}</p>
                </div>
                <div className="main-weather-date">
                    <p className="weather-current-time">{info.current?.last_updated.slice(10, 16)}</p>
                    <p className="weather-current-name">{`${info.current?.last_updated.slice(0, 10)}, ${identifyTheWeekDay(new Date().getDay())}`}</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
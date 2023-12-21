import React, { useState } from 'react'
import './Categories.scss'
import { LuSunset } from "react-icons/lu";
import { FiSunrise } from "react-icons/fi";
import { BsDropletHalf } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { BsTriangleFill } from "react-icons/bs";




const Categories = (info) => {
    // console.log(info.forecast?.forecastday[0].hour?.map(item => item.time.slice(11, 16)));

    return (
        <div>
            <div className="weather-additional-info">
                <div className="weather-additional-info_wrapper">
                    <div className="current-weather-add-info">
                        <div className="add-info">
                            <div className="add-info-item">
                                <BsDropletHalf className="drop icon" />
                                <div>
                                    <p>Humidity</p>
                                    <p className="humidity">{`${info.current?.humidity}%`}</p>
                                </div>
                            </div>
                            <div className="add-info-item">
                                <FiSun className="sun-shine icon" />
                                <div>
                                    <p>UV index</p>
                                    <p className="uv">{`${info.current?.uv} out of 10`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="add-info">
                            <div className="add-info-item">
                                <LuSunset className="sunset icon" />
                                <div>
                                    <p>Sunset</p>
                                    <p className="sunset">{info.forecast?.forecastday[0].astro.sunset}</p>
                                </div>
                            </div>
                            <div className="add-info-item">
                                <FiSunrise className="sunrise icon" />
                                <div>
                                    <p>Sunrise</p>
                                    <p className="sunrise">{info.forecast?.forecastday[0].astro.sunrise}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="current-weather-indicator">
                        <div className="air-pressure">
                            {`${info.current?.pressure_mb}PA`}
                            <p className="air-pressure">Air Pressure</p>
                        </div>
                        <div className="wind-direction">
                            <div className="wind-arrow" style={{ transform: `rotate(${info.current?.wind_degree}deg)` }}>
                                <BsTriangleFill className="triangle" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="current-weather-hourly">
                    {/* <div className="chart-wrapper"> */}
                    <iframe id="map" src={`https://maps.google.com/maps?q=${info.location?.name}%20Dates%10Products&amp;t=&amp;z=12&amp&output=embed`} width='100%' height="100%" allowFullScreen frameBorder="0"></iframe>
                    {/* </div> */}
                    <div className="day-info">
                        <div className="today">{ }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
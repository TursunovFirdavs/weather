import './App.css';
import React, { useEffect, useRef, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { BsFillMoonFill } from "react-icons/bs";
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Hero from './components/hero/Hero'
import InHours from './components/in-hours/InHours';
import Categories from './components/categories/Categories';

function App() {
  const API_KEY = "644f6ce0ca9e401ebb891832211707";
  const [city, setCity] = useState('')
  const [cityData, setCityData] = useState(null)
  const cityInput = useRef('')
  const dispatch = useDispatch()

  useEffect(() => {
    axios(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city.length > 1 ? city : "Tashkent"}&days=7&aqi=yes&alerts=yes`)
      .then(res => {
        setCityData(res.data)
        console.log(res.data)
      })
      .catch(error => console.log(error))
  }, [city])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setCity(cityInput.current.value);
  }
  return (
    <div className='container'>
      <nav>
        <h1>Weather App</h1>
        <form onSubmit={handleFormSubmit} className='search-form'>
          <input ref={cityInput} type="text" placeholder="Search any city..." id="city" />
          <button><IoSearch className='search-icon' /></button>
        </form>
        <div className="theme">
          <div className="circle">
            <IoSunnySharp className="sun-icon" />
            <BsFillMoonFill className="moon-icon" />
          </div>
        </div>
      </nav>
      <Hero {...cityData}/>
      <InHours {...cityData}/>
      <Categories {...cityData}/>
    </div>
  );
}

export default App;

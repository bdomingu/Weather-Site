import React, { Component } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Search from './Search';
import SingleCard from './SingleCard';


export default function SearchCard({temp, ctime, night, icons}) {

    const [locationData, setLocationData] = useState({});
    const [location, setLocation] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
  
    
    const searchLocation = (event) => {
        // console.log(location)
        if (event.key === 'Enter'){
          axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${location}`).then((response) => {
              // console.log(response)
          setLocationData(response)
          setHasSearched(true);
          })
          
        }
        
      }

        return (
          <div>
             <div className="container ">
        <input className="input"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter a City..."
          type="text" />
      </div>
          <div>
            {hasSearched && locationData != {} ? <><SingleCard tempfunc={temp} timefunc={ctime} nightfunc={night}  iconfunc={icons} locationdata={locationData} /></> : null}
            </div>
          </div>
        )
        
        
        
    

}



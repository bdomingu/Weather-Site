import { useState, useEffect } from 'react';
import React from 'react';
// import background from './img/blue.png';
import "./App.css";
import axios from 'axios';
import Cards from './components/Cards';
import jsonData from './data.js'
import NavBar from './components/NavBar';
import SearchCard from './components/SearchCard';
import SingleCard from './components/SingleCard';
import cloudy from './img/cloudy_icon.png';
import pCloudy from './img/partlycloudy_day.png';
import pCloudyNight from './img/partlycloudy_night.png';
import sunny from './img/sunny.png'; 
import clear from './img/clear_icon.png';
import fog from './img/fog_icon.png';
import rainThunder from './img/rain_thunder.png';
import lightRain from './img/light_rain.png';
// import NavbarComp from './components/NavbarComp';
require('dotenv').config()
//console.log(process.env.REACT_APP_WEATHER_API_KEY)


  
  

function App() {
 
  const [data, setData] = useState(jsonData); 
  const [cities] = useState(['El Paso', 'Miami', 'Dallas', 'Austin', 'Bozeman', 'Fairplay']);
  const [locationData, setLocationData] = useState({});
  const [location, setLocation] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  
  

  const convertToF = (temp) => {
    let farenheit= (temp * 9/5) + 32
     return Math.round(farenheit);
 }
 
 const convertTime = (time) => {
     let oldTime = time.slice(10);
     const newTime = oldTime.split(':');
     return Number(newTime[0]);
   
 }
  // const dayNight = console.log((convertTime(data[0].data.location.localtime)));
 
  const isNight = (time) => {
     if (time >= 18 || time <= 6){
         return true;
     } else {  
         return false;
     
  }
 }


 const icons = (description, icon, timeOfDay) => {
   for (let i=0; i<description.length; i++) {
       if (description[i] === "Sunny") {
           return sunny;
       } else if (description[i] === "Partly cloudy") {
           if (isNight(timeOfDay)) {
               return pCloudyNight;
           } else {
               return pCloudy;
           }
       } else if (description[i] === "Overcast") {
           return cloudy;
       } else if (description[i] === "Cloudy") {
           return cloudy;
       }  else if (description[i] === 'Clear'){
           return clear;
       }  else if (description[i] === 'Fog'){
             return fog;
       }  else if (description[i] === 'Light Rain With Thunderstorm'){
             return rainThunder;
       }  else if (description[i] === 'Light rain shower'){
             return lightRain;
       } else {
           return icon;
       }

   }

 }

  useEffect(() => {

      const getWeather = async () => {
        let result = []
        for (let i=0; i<cities.length; i++) {
           await axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${cities[i]}`).then(
            (response) => {
              result.push(response);
            }
            );
          }
          await setData(result);
        }

      getWeather()

        
}, []);

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
         {/* <SearchCard/> */}
        <NavBar />
        <SearchCard location={location} setLocation={setLocation} searchLocation={searchLocation}/>
        {hasSearched && locationData !== {} ? <><SingleCard locationData={locationData} isNight={isNight} convertTime={convertTime} convertToF={convertToF} icons={icons}/></> : null}
        <Cards data={data} convertToF={convertToF} convertTime={convertTime} isNight={isNight} icons={icons} />
        
        

      </div>
   
  
  );
}





export default App;

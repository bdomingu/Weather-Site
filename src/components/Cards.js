import { useState } from 'react';
import React from 'react';
import Card from 'react-bootstrap/Card';
import cloudy from '../img/cloudy_icon.png';
import pCloudy from '../img/partlycloudy_day.png';
import pCloudyNight from '../img/partlycloudy_night.png';
import sunny from '../img/sunny .png';
import clear from '../img/clear_icon.png';
import fog from '../img/fog_icon.png';
import rainThunder from '../img/rain_thunder.png';
import lightRain from '../img/light_rain.png';
import SearchCard from './SearchCard';
import NavBar from './NavBar';

export default function Cards({ data }) {
    
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
    
    return (
        <>
            <NavBar className='nav' farenheit={convertToF} time={convertTime} night={isNight} icons={icons} />
      <br></br>
    <div>
        <div className="cards">
            {console.log(data)}
            {data.map((city) => {
                return (
                    <div >
                        <Card className={isNight(convertTime(city.data.location.localtime)) ? "styleNight" : "styleDay"}>

                            <Card.Body>
                                <Card.Title className={isNight(convertTime(city.data.location.localtime)) ? "textNight" : "textDay"}>{city.data.location.name}</Card.Title>
                                <Card.Subtitle className={isNight(convertTime(city.data.location.localtime)) ? "tempNight" : "tempDay"}>{convertToF(city.data.current.temperature)}°F</Card.Subtitle>
                                <img className="icon" variant="top" src={icons(city.data.current.weather_descriptions, city.data.current.weather_icons, convertTime(city.data.location.localtime))} />
                                <Card.Text className={isNight(convertTime(city.data.location.localtime)) ? "descriptionNight" : "descriptionDay"}>
                                    {city.data.current.weather_descriptions}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
        
                );
            })}

    </div>
        </div></>
        

        
        
    );

    
// }

}

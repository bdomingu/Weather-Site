import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import cloudy from '../img/cloudy_icon.png';
import pCloudy from '../img/partlycloudy_day.png';
import pCloudyNight from '../img/partlycloudy_night.png';
import sunny from '../img/sunny.png';
import clear from '../img/clear_icon.png';
import fog from '../img/fog_icon.png';
import rainThunder from '../img/rain_thunder.png';
import lightRain from '../img/light_rain.png';

const scard = {
  padding: '20px',
  display: 'flex',
  position: 'inherit',
  height: '15rem',
  width: '15rem',
  flex: '1 1 calc(33.33% - 20px)',
  position: 'inherit',
  
}

  



export default function SingleCard({locationData, isNight, convertTime, convertToF, icons}) {
 
    return (
      
          <div> 
          <Card style={scard} className={isNight(convertTime(locationData.data.location.localtime)) ? "styleNight" : "styleDay"}>
            
            <Card.Body>
              <Card.Title className={isNight(convertTime(locationData.data.location.localtime)) ? "sTextNight" : "sTextDay"}>{locationData.data.location.name}</Card.Title>
              <Card.Subtitle className={isNight(convertTime(locationData.data.location.localtime)) ? "sTempNight" : "sTempDay"}>{convertToF(locationData.data.current.temperature)}°F</Card.Subtitle>
              <img className="sIcon" variant="top" src={icons(locationData.data.current.weather_descriptions, locationData.data.current.weather_icons, convertTime(locationData.data.location.localtime))} /> 
              <Card.Text className={isNight(convertTime(locationData.data.location.localtime)) ? "sDescriptionNight" : "sDescriptionDay"}>{locationData.data.current.weather_descriptions}</Card.Text>
            </Card.Body>
          </Card>
       
        </div>
        
    )
  
}

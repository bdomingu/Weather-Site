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

export default function SingleCard({locationData, isNight, convertTime, convertToF, icons}) {
 
    return (
      
          <div>
      {/* {console.log(locationdata)} */}
     
          <Card className={isNight(convertTime(locationData.data.location.localtime)) ? "styleNight" : "styleDay"}>
            
            <Card.Body>
              <Card.Title className={isNight(convertTime(locationData.data.location.localtime)) ? "textNight" : "textDay"}>{locationData.data.location.name}</Card.Title>
              <Card.Subtitle className={isNight(convertTime(locationData.data.location.localtime)) ? "tempNight" : "tempDay"}>{convertToF(locationData.data.current.temperature)}°F</Card.Subtitle>
              <img className="icon" variant="top" src={icons(locationData.data.current.weather_descriptions, locationData.data.current.weather_icons, convertTime(locationData.data.location.localtime))} /> 
              <Card.Text className={isNight(convertTime(locationData.data.location.localtime)) ? "descriptionNight" : "descriptionDay"}>{locationData.data.current.weather_descriptions}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        
    )
  
}

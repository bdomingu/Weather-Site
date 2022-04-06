import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import cloudy from '../img/cloudy_icon.png';
import pCloudy from '../img/partlycloudy_day.png';
import pCloudyNight from '../img/partlycloudy_night.png';
import sunny from '../img/sunny .png';
import clear from '../img/clear_icon.png';
import fog from '../img/fog_icon.png';
import rainThunder from '../img/rain_thunder.png';
import lightRain from '../img/light_rain.png';

export default function SingleCard({locationdata, tempfunc, nightfunc, timefunc, iconfunc}) {
  
 
    return (
      
          <div>
      {/* {console.log(locationdata)} */}
     
          <Card className={nightfunc(timefunc(locationdata.data.location.localtime)) ? "styleNight" : "styleDay"}>
            
            <Card.Body>
              <Card.Title className={nightfunc(timefunc(locationdata.data.location.localtime)) ? "textNight" : "textDay"}>{locationdata.data.location.name}</Card.Title>
              <Card.Subtitle className={nightfunc(timefunc(locationdata.data.location.localtime)) ? "tempNight" : "tempDay"}>{tempfunc(locationdata.data.current.temperature)}°F</Card.Subtitle>
              <img className="icon" variant="top" src={iconfunc(locationdata.data.current.weather_descriptions, locationdata.data.current.weather_icons, timefunc(locationdata.data.location.localtime))} /> 
              <Card.Text className={nightfunc(timefunc(locationdata.data.location.localtime)) ? "descriptionNight" : "descriptionDay"}>{locationdata.data.current.weather_descriptions}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        
    )
  
}

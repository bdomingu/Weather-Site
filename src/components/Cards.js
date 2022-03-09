import { useState } from 'react';
import React from 'react';
import Card from 'react-bootstrap/Card';


export default function Cards({ data }) {
    const convertToF = (temp) => {
       let farenheit= (temp * 9/5) + 32
        return Math.round(farenheit);
    }

    return (
        <div className="cards">
            {console.log(data)}
            {data.map((city) => {
                return (
                    <div>
                        <Card className="style" >
                            <Card.Body >
                             <img variant="top" src={city.data.current.weather_icons} /> 
                                <Card.Title className="text">{city.data.location.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{convertToF(city.data.current.temperature)}°F</Card.Subtitle>
                                <Card.Text className="description">
                                {city.data.current.weather_descriptions}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
        

        
        
    );
// }

}

import React from 'react';
import Card from 'react-bootstrap/Card';


export default function Cards({ data, convertToF, convertTime, isNight, icons }) {
    
    
    
    return (
        <>
           
      <br></br>
    <div>
        <div className="cards">
            {console.log(data)}
            {data.map((city) => {
                console.log(city.data.location.localtime)
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

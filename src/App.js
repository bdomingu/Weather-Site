import { useState, useEffect } from 'react';
import React from 'react';
// import background from './img/blue.png';
import "./App.css";
import axios from 'axios';
import Cards from './components/Cards';
import jsonData from './data.js'
import NavBar from './components/NavBar';
// import NavbarComp from './components/NavbarComp';
require('dotenv').config()
//console.log(process.env.REACT_APP_WEATHER_API_KEY)


  
  

function App() {
 
  const [data, setData] = useState(jsonData); 
  const [cities] = useState(['El Paso', 'Miami', 'Dallas', 'Austin', 'Bozeman', 'Fairplay']);

  
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
    
  return (
    
   
    
       <div>
         {/* <SearchCard/> */}
       
        <Cards data={data} />
        
        

      </div>
   
  
  );
}





export default App;

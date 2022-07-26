import React from 'react'



export default function SearchCard({location, setLocation, searchLocation}) {

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
           
          </div>
        )
        
        
        
    

}



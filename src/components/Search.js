import React, { Component } from 'react'

export default function Search({location, setLocation, searchLocation}) {
  
    return (
      <div className="container ">
        <input className="input"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter a City..."
          type="text" />
      </div>
    )
  
}

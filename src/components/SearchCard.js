import React, { Component } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Search from './Search';
import SingleCard from './SingleCard';


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



import React, { Component } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import SearchCard from './SearchCard';

const nav = {
  width: '100%',
  position: 'absolute',
  top: '0px',
  padding: 'none',
  margin: 'none',
  height: '80px',
  // right: '10px',
  left: '0px',
  

}
export default function NavBar({farenheit, time, night, icons}) {

    return (
      <div>
       <div>
  <Navbar className="nav" style={nav}>
    
    <Container>
    <Navbar.Brand href="#home" className='navtext'>Forecast with Betty</Navbar.Brand>
    <Nav >
    </Nav>
    </Container>
  </Navbar>
  
</div>
      // </div>
    )
  }


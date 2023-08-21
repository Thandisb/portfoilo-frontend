import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {NavLink} from 'react-router-dom'

import "./Nav.css"
function Nav() {
 
 
  return (
    <div className='nav-container'>
  
    <Navbar bg='dark' expand="lg">
     <p> NYC'S Restaurant Guide</p>
     <ul>
      <li>
        <NavLink className='nav-link' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink  className='nav-link' to='/restaurants'>Restaurants</NavLink>
      </li>
      <li>
        <NavLink  className='nav-link' to='/restaurants/new'>Create A New Restaurants</NavLink>
      </li>
     </ul>
    </Navbar>

    </div>
  )
}

export default Nav
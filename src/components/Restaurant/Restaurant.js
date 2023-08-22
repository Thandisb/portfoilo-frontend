import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Restaurant.css' 

function Restaurant({restaurant}) {
  return (
    <div>
      <h2 className='restaurantborough'> {restaurant.borough}</h2>
       <Card style={{width: '18rem'}}>
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>{restaurant.location}</Card.Subtitle>
          <Card.Text>{restaurant.description}</Card.Text>
          <Link to={`/restaurants/${restaurant.id}`}> Learn more about {restaurant.name} here.. </Link>
        </Card.Body>
      </Card>
    </div>
  )
}


export default Restaurant
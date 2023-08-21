import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap';
import Restaurant from '../Restaurant/Restaurant'


import {getAllRestaurants} from '../Api/Api'



function Restaurants() {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetchRestaurant()
  }, [])

  async function fetchRestaurant(){
    try {
      let result = await getAllRestaurants()
      console.log(result)
      setRestaurants(result.data)
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <div>
      <h1>Best Restaurants in the city </h1>
      <Row className='d-flex align-items-center justify-content-center mb-5'>
        {restaurants.map((restaurant) => (
          
          <Col sm={12} md={6} lg={4} xl={3} key={restaurant.id}>
            <Restaurant restaurant={restaurant}/>
          </Col>
        ))}
      </Row>

    </div>
  )
}

export default Restaurants
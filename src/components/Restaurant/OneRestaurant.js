import React, {useState, useEffect, useCallback} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Rating from '../Rating'
import Reviews from '../Reviews/Reviews'
import {getOneRestaurant, deleteRestaurantApi, getRestaurantReviews} from '../Api/Api'




function OneRestaurant() {
  
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [reviewCount, setreviewCount] = useState(0)
  const [reviewAverage, setreviewAverage] = useState(0)

  const {id} = useParams();

  const navigate = useNavigate();

  useEffect(() => {
   getOneRestaurantById()
  }, [])
  
async function getOneRestaurantById(){
    try {
        let result = await  getOneRestaurant(id)
        setRestaurantInfo(result.data)
    } catch (e) {
        console.log(e)
    }
  }
async function deleteRestaurant(id){
    try {
        await deleteRestaurantApi(id)
        alert('Are You Sure Want Delete(This Action Is Irreversible')
        alert(`Restaurant: ${restaurantInfo?.name} has been deleted`)
        navigate('/restaurants')
    } catch (e) {
        console.log(e)
    }
  }

const fetchReviews = useCallback(async () => {
    try {
        let reviewObj = await getRestaurantReviews(String(restaurantInfo?.id));
        if(reviewObj.data){
            setreviewCount(reviewObj.data.length);
        if(Number(reviewObj.data.length) !== 1){
            setreviewAverage(
                Math.round(
                    (reviewObj.data.reduce(
                        (x, y) => Number(x.food_rating + x.service_rating) + Number(y.food_rating + y.service_rating)
                    ) / 
                      reviewObj.data.length) * 
                      2
                  ) / 2   
            );
        } else {
            setreviewAverage(reviewObj.data[0].rating)
        }
        }
    } catch (error) {
        console.log(error)
    }
}, [restaurantInfo?.id])

useEffect(() => {
fetchReviews()
}, [fetchReviews])

function handlesBackToRestaurants(){
    navigate('/restaurants')
  }
function handlesEdit(id){
    navigate(`/restaurants/${id}/edit`)
}
 
  
    return (
   <Card border="dark" bg='light' style={{width: '100%'}}> 
     <Card.Header>{restaurantInfo?.name}</Card.Header>
     <Card.Body>
        <Card.Subtitle className='mb-2 text-muted'>Address:{restaurantInfo?.location} <span>Website:{restaurantInfo?.url}</span></Card.Subtitle>
        <Card.Text>{restaurantInfo?.description}</Card.Text>
        <Card.Text as="div">
          <Link to={`/restaurants/${id}/reviews`}>
            <Rating value={reviewAverage} text={`${reviewCount} reviews`} />
          </Link>
        </Card.Text>
     </Card.Body>
     <ListGroup className="list-group-item">
        <ListGroup.Item> Hours: {restaurantInfo?.hours} </ListGroup.Item>
        <ListGroup.Item> Type: {restaurantInfo?.type} </ListGroup.Item>
        <ListGroup.Item> Price: {restaurantInfo?.price}/5 </ListGroup.Item>
        <ListGroup.Item> Health Rating: {restaurantInfo?.health_rating} </ListGroup.Item>
     </ListGroup>
     <Card.Body>
        <Button onClick={()=>deleteRestaurant(id)} variant='danger'> Delete {restaurantInfo?.name} </Button>
        <Button onClick={handlesBackToRestaurants} variant='dark'> Back To Restaurants </Button>
        <Button onClick={()=>handlesEdit(id)} variant='danger'> Update info for {restaurantInfo?.name} </Button>
     </Card.Body>
   
   <Reviews />
   </Card>
   
  )
}

export default OneRestaurant
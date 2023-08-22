import React , {useContext} from 'react'
import {ReviewContext} from '../context/context'
import { Container, Card} from 'react-bootstrap';
import { FaRegUser, FaTrashAlt } from 'react-icons/fa';
import ReviewForm from './ReviewForm'
import Rating from '../Rating'

import './Review.css'

function Review() {
  
    const {
        id,
        review, 
        fromParentReviewsHandleSubmit,
        handlesDelete,
        toggleForm,
        setToggleForm,
    } = useContext(ReviewContext)
  
  function toggleEditForm () {
    setToggleForm(!toggleForm)
  }
  return (
<Container>
        <Card border='dark' className='mb-5' id = 'reviewcard'>
         
       
          {toggleForm ? ( <ReviewForm fromParentReviewsHandleSubmit={fromParentReviewsHandleSubmit} editReview={review} toggleEditForm={toggleEditForm}/>
          ) : (
            <Card.Body>
                <div className='d-flex align-item-center mb-3'>
                  <FaRegUser
                   className="rounded-circle text-light bg-secondary p-1"
                   style={{ width: '40px', height: '40px', marginRight: '10px' }}
                />
                
                <Card.Title className='text-secondary'>{review?.reviewer}</Card.Title>

                </div>
                <div className="mb-3">
                <Rating value={review?.food_rating} text={`Food rating: ${review?.food_rating} stars`} />
                </div>
                <div className="mb-3">
                <Rating value={review?.service_rating} text={`Service rating: ${review?.service_rating} stars`} />
                </div>
                <Card.Title className='text-secondary'>{review?.title} </Card.Title>
                <Card.Text>{review?.content}</Card.Text>
                <button onClick={() => handlesDelete(id)}>
                    <FaTrashAlt  style={{ width: '20px', height: '20px', marginLeft: '10px' }} />
                </button>
                <Card.Footer>
                    <div> Would You Recommend? {review?.would_recommend ? "⭐️" : "🚮" } </div>
                    </Card.Footer>
            </Card.Body>
          )}
            <button onClick={toggleEditForm}> Edit </button>
            {/* <ReviewForm fromParentReviewHandleOnSubmit={fromParentReviewHandleOnSubmit} editReview={review} toggleEditForm = {toggleEditForm} /> */}
       </Card>
    </Container>
  )
}

export default Review
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './Review.css'

function ReviewForm(props) {
  let { id } = useParams();

  const { editReview } = props;

  const [review, setReview] = useState({ 
    reviewer:"",
    title:"",
    content:"",
    would_recommend:false,
    food_rating:0,
    service_rating:0,
    restaurant_id: id,
  })

  useEffect(() => {
   if(editReview){
    setReview(editReview)
   }
  }, [id, editReview, props])
  
  const handleTextChange = (event) => {
    setReview({...review, [event.target.id]: event.target.value})
  }

  const handleCheckboxChange =  () => {
    setReview({...review, would_recommend: !review.would_recommend})
  }


  function handleSubmit(event){
    event.preventDefault();

    props.fromParentReviewsHandleSubmit(review);
    
    if(editReview){
      props.toggleEditForm()
    }
    setReview({
      reviewer:"",
      title:"",
      content:"",
      would_recommend:false,
      food_rating:0,
      service_rating:0,
      restaurant_id: id,
    })
  }


  return (
    <div className='Editform'>{props.children}
    <form onSubmit={handleSubmit}>
      <div className='edit-form-input'>
      <label htmlFor='reviewer'>Name:</label>
      <input required type='text' id='reviewer' placeholder='Enter Your Name' value={review.reviewer} onChange={handleTextChange}/>
      </div>
      <div>
      <label htmlFor='title'>Review Title:</label>
      <input required type='text' id='title' placeholder='Enter title' value={review.title} onChange={handleTextChange}/>
      </div>
      <div>
      <label htmlFor='would_recommend'>Would you Recommend?</label>
      <input type='checkbox' id='would_recommend'  value={review.would_recommend} onChange={handleCheckboxChange}/>
      </div>
      <div>
      <label htmlFor='food_rating'>Food Rating:</label>
      <input required type='number' id='food_rating' min="0" max="5"  step="1" value={review.food_rating} onChange={handleTextChange}/>
      </div>
      <div>
      <label htmlFor='service_rating'>Service Rating:</label>
      <input required type='number' id='service_rating' min="0" max="5"  step="1" value={review.service_rating} onChange={handleTextChange}/>
      </div>
      <div>
      <label htmlFor='content'>Review:</label>
      <textarea required type='text' id='content' placeholder='Tell Us Your Experience' value={review.content} onChange={handleTextChange}/>
      </div>
      <button className='submit'>Submit</button>
      
    </form>
    </div>
  )
}

export default ReviewForm
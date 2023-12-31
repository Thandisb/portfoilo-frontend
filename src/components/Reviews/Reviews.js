import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Review from './Review'
import ReviewForm from './ReviewForm'
import { ReviewContext } from '../context/context'

import {getRestaurantReviews, createReviewApi, updateRestaurantReviewByApi, deleteReviewApi} from '../Api/Api'

const API = process.env.REACT_APP_API_URL;



function Reviews() {
  const [reviews, setReviews] = useState([])
  const [toggleForm, setToggleForm] = useState(false)

  const { id } = useParams()
  // const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
   fetchRestaurantReviews();
  }, [id, API])

  async function fetchRestaurantReviews(){
    try {
        let result = await getRestaurantReviews(id)
        console.log(result.data)
        setReviews(result.data)
    } catch (error) {
        console.log(error)
    }
  }
   
  async function handleAdd(newReview) {
    try {
        let result = await createReviewApi(id, newReview)
       console.log(result)
        setReviews([result.data, ...reviews])
    } catch (e) {
        console.log(e)
    }
  }

 async function handlesEdit (updatedReview){
  console.log("handle edit", updatedReview)  
  try {
      const result = await updateRestaurantReviewByApi(
        id,
        updatedReview.id,
        updatedReview
      );
       console.log(result)
      const copyReviewArray = [...reviews];

      const indexUpdateReview = copyReviewArray.findIndex((review) => {
          return review.id === updatedReview.id;
      });

      copyReviewArray[indexUpdateReview] = result.data
      
      setReviews(copyReviewArray);
      setToggleForm(!toggleForm);
        } catch (error) {
      console.log(error)
      
     }
 
  }
async function handlesDelete (id){
    try {
        await deleteReviewApi(id)

        let updatedArray = reviews.filter((item) => item.id !== id)
        setReviews(updatedArray)
    } catch (error) {
        console.log(error)
    }
}
  return(
    <section>
    <ReviewForm fromParentReviewsHandleSubmit={handleAdd} />
 {reviews.map((item) => {
    return(
      
       <ReviewContext.Provider
        value={{
            fromParentReviewsHandleSubmit: handlesEdit,
            review: item,
            handlesDelete: handlesDelete,
            toggleForm: toggleForm,
            setToggleForm: setToggleForm,
           
        }}
        key={item.id}>
           <Review />
        </ReviewContext.Provider>
        
    )
 })}
 </section>
  )
}

export default Reviews
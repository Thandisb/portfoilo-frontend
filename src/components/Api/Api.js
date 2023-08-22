import Axios  from './Axios';

async function getAllRestaurants (){
    try {
        const result = await Axios.get("/restaurants")
        return result
    } catch (error) {
        return error
    }
}
 async function getOneRestaurant (id) {
    try {
        let result = await Axios.get(`/restaurants/${id}`);
        return result
    } catch (error) {
        return error
        
    }

 }
 async function deleteRestaurantApi (id) {
    try {
        let result = await Axios.delete(`/restaurants/${id}`);
        return result
    } catch (error) {
        return error
        
    }

 }
 async function updateOneRestaurant (id, updateRestaurant) {
    try {
        let result = await Axios.put(`/restaurants/${id}`, updateRestaurant);
        return result
    } catch (error) {
        return error
        
    }

 }
 async function createRestaurantApi (restaurant) {
    try {
        let result = await Axios.post(`/restaurants`, restaurant)
        return result
    } catch (error) {
        return error
    }
 }

 async function getRestaurantReviews (id){
    try {
      let result = await Axios.get(`/restaurants/${id}/reviews`)
      return result  
    } catch (e) {
        return e
    }
 }

 async function updaterecipeReviewByApi(id, updateReviewId, updatedReview){
    try {
      let result = await Axios.put(
        `/restaurants/${id}/reviews/${updateReviewId}`,
        updatedReview
      )  
      return result
    } catch (e) {
        return e
    }
 }
 
 async function createReviewApi(id, newReview){
    try {
        let result = await Axios.delete(`/restaurants/${id}/reviews`, newReview)
        return result
    } catch (error) {
        return error
    }
 }

 async function deleteReviewApi (id){
    try {
        let result = await Axios.delete(`/restaurants/${id}/reviews/${id}`)
        return result
    } catch (error) {
        return error
    }
 }


export { 
         getAllRestaurants, 
         getOneRestaurant, 
         deleteRestaurantApi, 
         updateOneRestaurant, 
         createRestaurantApi,
         getRestaurantReviews,
         createReviewApi,
         updaterecipeReviewByApi,
        deleteReviewApi
       }
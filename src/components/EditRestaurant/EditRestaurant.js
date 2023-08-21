import React, {useState, useEffect}from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {getOneRestaurant, updateOneRestaurant} from '../Api/Api'

function EditRestaurant() {
   const { id } = useParams();

   const navigate = useNavigate();

   const [restaurant, setRestaurant] = useState({
    borough: "",
    name: "",
    type: "",
    location: "",
    description: "",
    health_rating: "",
    url:"",
    hours: "",
    price:0

   })

   useEffect(() => {
    const fetchRestaurantData = async () => {
        try {
            const res = await getOneRestaurant(id)
            setRestaurant(res.data)
        } catch (error) {
            navigate("/404")
        }
    }
    fetchRestaurantData()
   }, [])

  
   async function handleOnSubmit(event){
    event.preventDefault()
    try {
        
        await updateOneRestaurant(id, restaurant )
        alert("Restaurant Update Successfully")
        navigate(-1)
    } catch (e) {
        console.log(e)
    }
  }

  const handleTextChange = (e) => {
       setRestaurant({
        ...restaurant,
        [e.target.id]: e.target.value
       })
  }

   
 
    return (
    <div className='restaurant-edit-container'>
        <h2>Edit Restaurant</h2>
        <div>
            <form onSubmit={handleOnSubmit}>
                <div className='restaurant-edit-form'> 
                    <label>Select a Borough</label>
                    <select id='borough' onChange={handleTextChange}>
                         <option>{restaurant.borough}</option>
                         <option value="Brooklyn">Brooklyn</option>
                         <option value="Bronx">Bronx</option>
                         <option value="Manhattan">Manhattan</option>
                         <option value="Queens">Queens</option>
                     </select>
                </div>
                <div className='restaurant-edit-input'>
                   <label>Restaurant's Name:</label>
                   <input type='text'
                   value={restaurant.name}
                   onChange={handleTextChange} />
                </div>
                <div className='restaurant-edit-input'>
                  <label>Restaurant Address:</label>
                  <input type='text'
                  value={restaurant.location}
                  onChange={handleTextChange}/>
                </div>
                <div className='restaurant-edit-input'>
                  <label>Restaurant's Website:</label>
                  <input type='text'
                  value={restaurant.url}
                  onChange={handleTextChange}/>
                </div>
                <div className='restaurant-edit-input'>
                  <label>Description:</label>
                  <input type='text'
                  value={restaurant.description}
                  onChange={handleTextChange}/>
                </div>
                <div className='restaurant-edit-input'>
                  <label>Health Rating:</label>
                  <input type='text'
                  value={restaurant.health_rating}
                  onChange={handleTextChange}/>
                </div>
                <div className='restaurant-edit-input'>
                  <label> Restaurant Hours:</label>
                  <input type='text'
                  value={restaurant.hours}
                  onChange={handleTextChange}/>
                </div>
                <div className='restaurant-edit-input'>
                  <label>Restaurant Price:</label>
                  <input type='number'
                  value={restaurant.price}
                  onChange={handleTextChange}/>
                </div>

                <button>Update Restaurant</button>

            </form>
        </div>
    </div>
  )
}

export default EditRestaurant
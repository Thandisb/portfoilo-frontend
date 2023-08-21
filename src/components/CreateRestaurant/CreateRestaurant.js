import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {createRestaurantApi} from '../Api/Api'

function CreateRestaurant() {
  
  const navigate = useNavigate();
  const [data, setData] = useState({
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

  async function handleOnSubmit (event) {
    event.preventDefault()
    try {
        await createRestaurantApi(data)
        setData({
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
        alert("New Restaurant Has Been added")
    } catch (e) {
        console.log(e)
    }
  }
  function handleOnChange(id, value){
    setData({
        ...data,
        [id]: value,
    })
}
    return (
        <div className='restaurant-edit-container'>
        <h2>New Restaurant Form</h2>
        <div>
            <form onSubmit={handleOnSubmit}>
                <div className='restaurant-edit-form'> 
                    <label>Select a Borough</label>
                    <select id='borough' onChange={handleOnChange}>
                         <option>{data.borough}</option>
                         <option value="Brooklyn">Brooklyn</option>
                         <option value="Bronx">Bronx</option>
                         <option value="Manhattan">Manhattan</option>
                         <option value="Queens">Queens</option>
                     </select>
                </div>
                <div className='restaurant-edit-input'>
                   <label>Restaurant's Name:</label>
                   <input type='text'
                   value={data.name}
                   onChange={handleOnChange} />
                </div>
                <div className='restaurant-edit-input'>
                  <label>Restaurant Address:</label>
                  <input type='text'
                  value={data.location}
                  onChange={handleOnChange}/>
                </div>
                <div className='restaurant-edit-input'>
                  <label>Restaurant's Website:</label>
                  <input type='text'
                  value={data.url}
                  onChange={handleOnChange}/>
                </div>
                <div className='restaurant-edit-input'>
                  <label>Description:</label>
                  <input type='text'
                  value={data.description}
                  onChange={handleOnChange}/>
                </div>
                <div className='restaurant-edit-input'>
                  <label>Health Rating:</label>
                  <input type='text'
                  value={data.health_rating}
                  onChange={handleOnChange}/>
                </div>
                <div className='restaurant-edit-input'>
                  <label> Restaurant Hours:</label>
                  <input type='text'
                  value={data.hours}
                  onChange={handleOnChange}/>
                </div>
                <div className='restaurant-edit-input'>
                  <label>Restaurant Price:</label>
                  <input type='number'
                  value={data.price}
                  onChange={handleOnChange}/>
                </div>

                <button>Create New Restaurant</button>

            </form>
        </div>
    </div>
  )
}

export default CreateRestaurant
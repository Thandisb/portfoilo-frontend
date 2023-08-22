import React, {useState} from 'react'
import {createRestaurantApi} from '../Api/Api'

function CreateRestaurant() {
  
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

    return (
        <div className='restaurant-edit-container'>
        <h2>New Restaurant Form</h2>
        <div>
            <form onSubmit={handleOnSubmit}>
                <div className='restaurant-edit-form'> 
                    <label>Select a Borough</label>
                    <select id='borough' onChange={(e)=>setData({...data, borough: e.target.value})}>
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
                   onChange={(e)=>setData({...data, name: e.target.value})} />
                </div>
                <div className='restaurant-edit-input'>
                  <label>Restaurant Address:</label>
                  <input type='text'
                  value={data.location}
                  onChange={(e)=>setData({...data, location: e.target.value})}/>
                </div>
                <div className='restaurant-edit-input'>
                  <label>Restaurant's Website:</label>
                  <input type='text'
                  value={data.url}
                  onChange={(e)=>setData({...data, url: e.target.value})}/>
                </div>
                <div className='restaurant-edit-input'>
                  <label>Description:</label>
                  <input type='text'
                  value={data.description}
                  onChange={(e)=>setData({...data, description: e.target.value})}/>
                </div>
                <div className='restaurant-edit-input'>
                  <label>Health Rating:</label>
                  <input type='text'
                  value={data.health_rating}
                  onChange={(e)=>setData({...data, health_rating: e.target.value})}/>
                </div>
                <div className='restaurant-edit-input'>
                  <label> Restaurant Hours:</label>
                  <input type='text'
                  value={data.hours}
                  onChange={(e)=>setData({...data, hours: e.target.value})}/>
                </div>
                <div className='restaurant-edit-input'>
                  <label>Restaurant Price:</label>
                  <input type='number'
                  value={data.price}
                  onChange={(e)=>setData({...data, price: e.target.value})}/>
                </div>

                <button>Create New Restaurant</button>

            </form>
        </div>
    </div>
  )
}

export default CreateRestaurant
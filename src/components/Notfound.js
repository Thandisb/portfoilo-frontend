import {useNavigate} from 'react-router-dom'
import '../App.css'

function Notfound() {
   const navigate = useNavigate();
    return (
    <div>
        <h1>Sorry Page Not Found</h1>
        <button className='Notfoundbutton' onClick={() => navigate('/restaurants')}>Back To Restaurants</button>
    </div>
  )
}

export default Notfound
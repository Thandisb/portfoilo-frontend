import {BrowserRouter as Router, Routes, Route}from 'react-router-dom'
import Nav from './components/Nav/Nav'

import Restaurants from './components/Restaurants/Restaurants'
import OneRestaurant from './components/Restaurant/OneRestaurant'
import EditRestaurant from './components/EditRestaurant/EditRestaurant'
import CreateRestaurant from './components/CreateRestaurant/CreateRestaurant'
 import Reviews from './components/Reviews/Reviews'
import Notfound from './components/Notfound'
import './App.css';

function App() {
  return (
    <div className="">
     <Router>
      <Nav />
      <Routes>
     
      <Route path='/restaurants' element={<Restaurants />}/>
      <Route path='/restaurants/new' element={<CreateRestaurant />}/>
      <Route path='/restaurants/:id' element={<OneRestaurant />}/>
      <Route path='/restaurants/:id/edit' element={<EditRestaurant />}/>
      <Route path='/restaurants/:id/reviews' element={<Reviews />} />
      <Route path='*' element={<Notfound />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

import th from './th.jpg';
import axios from 'axios'
import './App.css';
import {FcSearch} from 'react-icons/fc'

import React, {useEffect, useState} from 'react';

function App() {
 
  const [city, setCity] = useState('');
  const [search, setSeach] = useState('')
  
  

  const key = '8a8e715740f0632236a62a3272bd1b2c'

  const getweather = (city) =>{
    if (!city) return
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+key
    axios.get(apiURL).then((res)=>{
      console.log('respos',res)
      setSeach(res.data)
    
      
    }).catch((err)=>{
      console.log('err',err)
      alert('check the spelling')
     
    })
  }

  const junk = () =>{
   getweather(city)
  }

  useEffect(()=>{
    getweather('kanpur')
  },[])

  return (
    <div className='bag'>
      
       <div className='container'>
     <div className="App">
      <input type='search' placeholder='Enter City Name ' value={city} onChange={(e)=>{setCity(e.target.value)  } } onClick={junk} />
      <button onClick={junk} ><FcSearch/></button>
    </div>
    <div className='con'>
      <h2 className='location'>
        {search?.name}
      </h2>
      <h1 className='temp'>
 {((search?.main?.temp)-273.15).toFixed(2)}°
      </h1>
      
      <div className='min'>
      <h3> min {((search?.main?.temp_min)-273.15).toFixed(2)}°</h3>
      <h3> max {((search?.main?.temp_max)-273.15).toFixed(2)}°</h3>
      </div>
      <div>
      
      </div>

    </div>
   </div>
    </div>
  );
}

export default App;

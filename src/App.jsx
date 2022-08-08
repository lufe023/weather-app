import { useEffect, useState } from 'react'
import './App.css'
import './scroll.css'
import CardWeather from './components/CardWeather'
import Footer from './components/Footer'


function App() { 

  const [coords, setCoords] = useState()


useEffect(() => {

  const success = pos => {
    const latlon = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(latlon)
  
  }
  
navigator.geolocation.getCurrentPosition(success)
}, [])



  return (
    <div className="App" id='top'>
      
      <CardWeather lon={coords?.lon} lat={coords?.lat}/>
     
      <Footer/>
    </div>
  )
}

export default App

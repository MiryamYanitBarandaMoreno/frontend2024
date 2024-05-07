import { useEffect, useState } from "react"
import getweather from "./api/weatherapi"
import WeatherCard from './components/WeatherCard'
import Search from './components/Search'
import './assets/css/index.css'
import { useForm } from "./hooks/useForm"


function App() {
  const [weather, setWeather]= useState(null)
  const [cities, setCities]=useState('Tuxtepec')
  
  useEffect(()=>{
    const apiweather = async () => {
    setWeather(await getweather(cities))}

    apiweather()
  },[cities])
  //console.log(await getweather())

  const [values,handleInputChange, reset] = useForm ({searchcities:""})

  return (
    <div className="container">
      <h1>Weather App</h1>
      <hr/>
      <div className="row">
        <Search
        values={values}
        handleInputChange={handleInputChange}
        reset={reset}
        cities={cities}
        setCities={setCities}
        />
      </div>
      <div className="row">
        <div className="col text-center">
      {
        !weather?
        <h2>Loading...</h2>:
        //cities.map((city)=>{
          <WeatherCard weather={weather}/>  
        //})              
      }
      
      </div>
      </div>
    </div>
  )
}

export default App

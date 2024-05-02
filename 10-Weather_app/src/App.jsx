import { useEffect, useState } from "react"
import getweather from "./api/weatherapi"


function App() {
  const [weather, setWeather]= useState(null)
  
  useEffect(()=>{
    const apiweather = async () => {
    setWeather(await getweather())}

    apiweather()
  },[])
  //console.log(await getweather())

  return (
    <>
      <h1>Weather App</h1>
      <hr/>
      <h2>{weather? weather.current.condition.text:"Loading..."}</h2>
    </>
  )
}

export default App

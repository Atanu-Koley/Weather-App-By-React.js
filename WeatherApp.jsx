import SearchBox from "./searchBox"
import InfoBox from "./infoBox"
import { useState } from "react"
export default function WeatherApp(){
const [weatherInfo , setWeatherInlfo] = useState({
  
    city :"delhi",
    feelslike:24.05,
    temp:25.05,
    tempMin:25.05,
    tempMax:25.05,
    humidity: 47,
    weather :"haze",
  

})

let updateInfo = (newInfo) =>{
  setWeatherInlfo(newInfo);
}

  return (
<div style={{textAlign: "center"}}>
  <h2><b>Weather App by mr.ATANU KOLEY</b></h2>
  <div>
  <SearchBox UpdateInfo ={updateInfo}/>
  <InfoBox Info={weatherInfo}/>
  </div>


  </div>

  )
}
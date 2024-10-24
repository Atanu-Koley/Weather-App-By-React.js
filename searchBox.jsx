import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { red } from '@mui/material/colors';
export default function SearchBox({UpdateInfo}){
  let [city , setCity] = useState(" ");
  let [error , setError] = useState(false);
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "a175a1e94a03e154cb26ae2dd2e006df";

let getWeatherInfo = async () =>{
  try{
  let respons = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  let jsonRespons = await respons.json();
  let result = {
    city :city,
    temp: jsonRespons.main.temp,
    tempMin: jsonRespons.main.temp_min,
    tempMax: jsonRespons.main.temp_max,
    humidity :jsonRespons.main.humidity,
    feelslike :jsonRespons.main.feelslike,
    weather : jsonRespons.weather[0].description,
  
  };
  console.log(result);
  return result;
  } catch(err){
    throw   err;
  }
};

let handleChange = (evt) =>{
  setCity(evt.target.value);
}

let handleSubmit = async (evt) =>{
  try{
    evt.preventDefault();
    console.log(city);
    setCity(" ");
    let newInfo = await getWeatherInfo();
    UpdateInfo(newInfo);
  }catch(err){
    setError(true);

  }
 
};

  return (
    <div>
      <h3>search for the  weather</h3>
      <form onSubmit={handleSubmit}>
      <TextField id="city" 
      label="city name" 
      variant="outlined" 
      value={city }
      onChange={handleChange} />
      <br />
      <br />
     
      <Button variant="contained" type="submit">Search</Button>
      {error && <p style= {{color:"red"}}>No search place exists!</p>}
      </form>
    </div>
  )
}
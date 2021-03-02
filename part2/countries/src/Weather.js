import React, {useState, useEffect} from 'react';
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const Weather = ({capital}) => {

  const [temperature, setTemperature] = useState(0);
  const [weatherIcons, setWeatherIcons] = useState([]);
  const [wind_speed, setWindSpeed] = useState(0);
  const [wind_dir, setWindDir] = useState('');

  useEffect(() => {
    axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
    .then(response => {
      const {data: {current: {temperature, weather_icons, wind_speed, wind_dir}}} = response;

      setTemperature(temperature);
      setWeatherIcons(weather_icons);
      setWindSpeed(wind_speed);
      setWindDir(wind_dir);
    })
  }, [capital]);

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>Temperature: {temperature} Celcius</p>
      {
        weatherIcons.map(icon => <img key={icon} alt="weather icon" src={icon} style={{width: "10%"}} />)
      }
      <p>wind: {wind_speed} mph direction {wind_dir}</p>
    </div>
  )
}

export default Weather;
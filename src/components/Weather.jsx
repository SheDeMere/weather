import React from 'react';
import { useSelector } from 'react-redux';

function Weather(props) {
  const weather = props.weather;
  const image = weather.current && weather.current.condition.icon;
  const temp = weather.current && weather.current.temp_c;
  const city = weather.location && weather.location.name;
  const message = useSelector((state) => state.weather.weatherItems);
  return message.error && message.error.code === 1006 ? (
    <div>
      <p className="error">City not found</p>
    </div>
  ) : (
    <div className="weather_box">
      <img width={100} src={image} alt="" />
      <p>{city}</p>
      <p className="temp">Temperature {temp}°</p>
    </div>
  );
}

export default Weather;

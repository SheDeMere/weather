import React from 'react'

function Weather (props) {
  const weather = props.weather;
  const image = weather.current && weather.current.condition.icon;
  const temp = weather.current && weather.current.temp_c;
  const city = weather.location && weather.location.name
  return (
    <div className='weather_box'>
      <img src={image} alt=""/>
      <p>{city}</p>
      <p className='temp'>Температура {temp}°</p>
    </div>
  )
}

export default Weather
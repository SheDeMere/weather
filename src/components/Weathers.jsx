import React from 'react'
import {  useSelector } from 'react-redux'
import Weather from './Weather'
import Form from './Form'


function Weathers (props) {
  const weather = useSelector(state => state.weather.weatherItems);

  return (
    <div className='weather'>
     <Weather weather={weather}/>
     <Form />
    </div>
  )
}

export default Weathers;
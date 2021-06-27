import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Weather from './Weather';
import Form from './Form';
import ReactLoading from 'react-loading';

function Weathers(props) {
  const weather = useSelector((state) => state.weather.weatherItems);
  const loading = useSelector((state) => state.weather.loading);

  return (
    <div className="weather">
      {!loading ? (
        <Weather weather={weather} />
      ) : (
        <div className="loading">
          <ReactLoading type="spin" color="white" height={50} width={50} />
        </div>
      )}
      <Form />
    </div>
  );
}

export default Weathers;

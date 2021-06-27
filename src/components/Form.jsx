import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadWeather } from '../redux/action';
import { useHotkeys } from 'react-hotkeys-hook';

function Form(props) {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  useHotkeys(
    'enter',
    () => {
      handleClick(city);
      setCity('')
    },
    { enableOnTags: ['INPUT'] },
  );

  const handleClick = () => {
    dispatch(loadWeather(city));
    setCity('')
  };
  return (
    <div className="form">
      <div>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => handleChange(e)}
        />
        <button style={{ fontSize: 13 }} onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Form;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadWeather } from "../redux/action";

function Form(props) {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    dispatch(loadWeather(city));
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Город"
        value={city}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleClick}>Поиск</button>
    </div>
  );
}

export default Form
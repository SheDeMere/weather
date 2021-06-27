export const loadWeather = (city) => {
  return (dispatch) => {
    dispatch({ type: 'weather/load/start' });

    fetch(
      `http://api.weatherapi.com/v1/current.json?key=65d6fa8cb55a47c0aa1133000212904&q=${city || 'grozny'}&aqi=no`,
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'weather/load/success',
          payload: json,
        });
      });
  };
};

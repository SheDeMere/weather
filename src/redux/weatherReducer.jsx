const initialState = {
  weatherItems: [],
  loading: false,
  city: '',
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'weather/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'weather/load/success':
      return {
        ...state,
        weatherItems: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default weatherReducer;

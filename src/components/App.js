import Weathers from './Weathers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadWeather } from '../redux/action';
import ReactLoading from 'react-loading';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadWeather());
  }, [dispatch]);

  return (
    <div className="App">
      <Weathers />
    </div>
  );
}

export default App;

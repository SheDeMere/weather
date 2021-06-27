import Weathers from './Weathers'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadWeather } from '../redux/action'
import ReactLoading from 'react-loading';
function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.weather.loading);


  useEffect(() => {
   dispatch(loadWeather())
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <ReactLoading type='spin' color='#000444fff' height={50} width={50} />
      </div>
    )
  }
  return (
    <div className="App">
      <Weathers />
    </div>
  );
}

export default App;

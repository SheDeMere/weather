import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger/src';
import weatherReducer from './weatherReducer';
import thunk from 'redux-thunk';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  weather: weatherReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

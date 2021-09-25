import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import loadReducer from './loadingReducer';
import allTripsReducer from './allTripsReducer';
import tripReducer from './tripReducer';

const rootReducer = combineReducers({
  loadReducer,
  sessionReducer,
  allTripsReducer,
  tripReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import allTripsReducer from './allTripsReducer';
import tripReducer from './tripReducer';
import UIReducer from './UIReducer';

const rootReducer = combineReducers({
  allTripsReducer,
  tripReducer,
  UIReducer,
});

export default rootReducer;

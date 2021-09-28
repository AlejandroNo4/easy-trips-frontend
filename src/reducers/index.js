import { combineReducers } from 'redux';
import tripsReducer from './tripsReducer';
import UIReducer from './UIReducer';

const rootReducer = combineReducers({
  tripsReducer,
  UIReducer,
});

export default rootReducer;

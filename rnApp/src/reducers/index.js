import { combineReducers } from 'redux';
import firstReducer from './First';
import HotelsList from './HotelsList';

const rootReducer = combineReducers({
  firstReducer,
  hotels: HotelsList
});

export default rootReducer;

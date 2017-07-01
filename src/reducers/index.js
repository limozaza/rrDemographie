import { combineReducers } from 'redux';
import ContriesReducer from './contriesReducer';
import MoratalityReducer from './mortalityReducer';

const rootReducer = combineReducers({
  countries: ContriesReducer,
  mortality: MoratalityReducer
});

export default rootReducer;

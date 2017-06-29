import { combineReducers } from 'redux';
import ContriesReducer from './contriesReducer';

const rootReducer = combineReducers({
  countries: ContriesReducer
});

export default rootReducer;

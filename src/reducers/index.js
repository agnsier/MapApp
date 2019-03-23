import { combineReducers } from 'redux';
import { mapReducer } from './mapReducer';
import { incidentsReducer } from './incidentsReducer';

export default combineReducers({
  incidentsReducer,
  mapReducer,
});

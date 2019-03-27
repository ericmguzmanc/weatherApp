import { combineReducers } from 'redux';

import { weatherListReducer } from './weatherListReducer';

const rootReducer = combineReducers({
  weatherList: weatherListReducer
});

export default rootReducer;
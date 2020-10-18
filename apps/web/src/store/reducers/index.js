import { combineReducers } from 'redux';

import ApiCallReducer from './apiCall';

const rootReducer = combineReducers({
  apiCall: ApiCallReducer,
});

export default rootReducer;

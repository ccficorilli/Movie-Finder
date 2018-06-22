import { combineReducers } from 'redux';
import search from './reducers/searchReducer';

const rootReducer = combineReducers({
// add reducers
  search
});

export default rootReducer;
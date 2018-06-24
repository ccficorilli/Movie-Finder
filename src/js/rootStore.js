import { createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;
/* eslint-disable no-underscore-dangle */
const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware()))
);
export default rootStore;
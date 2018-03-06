import reducer from '../reducer';
import thunk from '../middleware/redux-thunk';
import reporter from '../middleware/redux-reporter';
import {createStore, applyMiddleware} from 'redux';

let appStoreCreate = () =>
  createStore(reducer, applyMiddleware(thunk, reporter));

export default appStoreCreate;

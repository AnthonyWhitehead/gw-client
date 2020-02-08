import { combineReducers } from 'redux';
import poems from './poems';
import loading from './loading';

export default combineReducers({
  poems,
  loading
});

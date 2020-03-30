import { combineReducers } from 'redux';
import poems from './poems';
import loading from './loading';
import cat from './cat'

export default combineReducers({
  poems,
  loading,
  cat
});

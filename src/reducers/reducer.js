import {combineReducers} from 'redux';
import {welcome} from './welcome';
import {photos} from './photos';
import {concerts} from './concerts';
import {aboutUs} from './aboutUs';

export default combineReducers({
  welcome,
  photos,
  concerts,
  aboutUs,
});

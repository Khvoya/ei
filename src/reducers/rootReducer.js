import {combineReducers} from 'redux';
import {welcome} from './welcome';
import {photos} from './photos';
import {concerts} from './concerts';
import {aboutUs} from './aboutUs';
import {shop} from './shop';

export default combineReducers({
  welcome,
  photos,
  concerts,
  aboutUs,
  shop,
});

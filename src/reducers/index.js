import { combineReducers } from 'redux';
import uploadScreen from './uploadScreen';
import displayScreen from './displayScreen';
import screen from './screen';

export default combineReducers({
    uploadScreen, displayScreen, screen
});
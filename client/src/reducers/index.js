import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import profile from './reducer_profile.js';
import userProfile from './reducer_getProfile.js';
// import updateProfile from './reducer_updateProfile.js';
import karma from './reducer_karma.js';

const rootReducer = combineReducers({
	karma: karma,
	profile: profile,
	userProfile: userProfile,
	form: formReducer,
});

export default rootReducer;
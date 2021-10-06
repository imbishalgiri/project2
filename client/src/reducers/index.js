import { combineReducers } from 'redux';

import authReducer from './authReducer';
import codeCheckReducer from './codeCheckReducer';
import verifyCodeReducer from './verifyCodeReducer';
import fetchAllDataReducer from './fetchAllDataReducer';
import noticeReducer from './noticeReducer';


export default combineReducers({
	auth: authReducer,
	codeErr: codeCheckReducer,
	vCodeErr: verifyCodeReducer,
	datasFetched: fetchAllDataReducer,
	notice: noticeReducer
});
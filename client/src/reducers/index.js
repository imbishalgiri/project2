import { combineReducers } from 'redux';

import authReducer from './authReducer';
import codeCheckReducer from './codeCheckReducer';
import verifyCodeReducer from './verifyCodeReducer';
import fetchAllDataReducer from './fetchAllDataReducer';
import noticeReducer from './noticeReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  codeErr: codeCheckReducer,
  vCodeErr: verifyCodeReducer,
  datasFetched: fetchAllDataReducer,
  notice: noticeReducer
});

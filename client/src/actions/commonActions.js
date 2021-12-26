import axios from 'axios';
import {
  CODE_SEND_ERRORS,
  GET_NOTICE,
  SET_FULLPAGE_LOADING,
  UNSET_FULLPAGE_LOADING,
  SET_LOADING_BUTTON,
  UNSET_LOADING_BUTTON
} from './types';

// ACTION FOR adding to the notice
export const addNotice = (userData, history) => async (dispatch) => {
  try {
    const notice = await axios.post('api/v1/notice', userData);
    console.log(notice.data);
    dispatch({
      type: CODE_SEND_ERRORS,
      payload: notice.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: CODE_SEND_ERRORS,
      payload: err.response.data
    });
  }
};

// action for fetching the notice data
export const showNotice = () => async (dispatch) => {
  try {
    const notice = await axios.get('api/v1/notice');
    console.log(notice.data);
    dispatch({
      type: GET_NOTICE,
      payload: notice.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: CODE_SEND_ERRORS,
      payload: err.response.data
    });
  }
};

// set loading to be true
export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING_BUTTON
  });
};

// unset loading state to false
export const unsetLoading = () => (dispatch) => {
  dispatch({
    type: UNSET_LOADING_BUTTON
  });
};

export const setFullpageLoading = () => (dispatch) => {
  dispatch({
    type: SET_FULLPAGE_LOADING
  });
};

export const unsetFullpageLoading = () => (dispatch) => {
  dispatch({
    type: UNSET_FULLPAGE_LOADING
  });
};

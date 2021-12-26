import {
  SET_FULLPAGE_LOADING,
  UNSET_FULLPAGE_LOADING,
  SET_LOADING_BUTTON,
  UNSET_LOADING_BUTTON
} from './../actions/types';

const initialState = {
  buttonLoading: false,
  fullpageLoading: false
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_BUTTON:
      return {
        ...state,
        buttonLoading: true
      };

    case UNSET_LOADING_BUTTON:
      return {
        ...state,
        buttonLoading: false
      };

    case SET_FULLPAGE_LOADING:
      return {
        ...state,
        fullpageLoading: true
      };

    case UNSET_FULLPAGE_LOADING:
      return {
        ...state,
        fullpageLoading: false
      };

    default:
      return state;
  }
};

export default loadingReducer;

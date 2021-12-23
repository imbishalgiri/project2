import { VERIFY_CODE_SEND_ERRORS } from './../actions/types';

const initialState = {};

const verifyCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_CODE_SEND_ERRORS:
      return action.payload;

    default:
      return state;
  }
};

export default verifyCodeReducer;

import { GET_NOTICE } from './../actions/types';

const initialState = {
  data: {
    notices: [{ title: '', description: '' }]
  }
};

const noticeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTICE:
      return action.payload;

    default:
      return state;
  }
};

export default noticeReducer;

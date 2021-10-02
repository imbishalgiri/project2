import { FETCH_ALL_DATAS } from './../actions/types';


const initialState = {
	status: 'failed',
	data: {
		assignments: []
	}
};

const fetchAllDataReducer = (state = initialState, action) => {
	switch(action.type) {

		case FETCH_ALL_DATAS: 
			return action.payload;

		default:
			return state;
	}
}

export default fetchAllDataReducer;
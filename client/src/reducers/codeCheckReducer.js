import { CODE_SEND_ERRORS } from './../actions/types';


const initialState = {}

const codeCheckReducer = (state = initialState, action) => {
	switch(action.type) {

		case CODE_SEND_ERRORS: 
			return action.payload;

		default:
			return state;
	}
}

export default codeCheckReducer;
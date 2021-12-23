import { SET_LOADING_BUTTON, UNSET_LOADING_BUTTON } from './../actions/types';


const initialState = {
	buttonLoading: false
};

const loadingReducer = (state = initialState, action) => {
	switch(action.type) {

		case SET_LOADING_BUTTON: 
			return {
                ...state,
                buttonLoading: true
            }
			 
		case UNSET_LOADING_BUTTON:
			return {
				...state,
				buttonLoading: false
			}

		default:
			return state;
	}
}

export default loadingReducer;
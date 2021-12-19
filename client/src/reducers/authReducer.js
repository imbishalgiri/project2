import { SET_CURRENT_USER, SUCCESS_REGISTRATION,  REGISTRATION_ERROR} from './../actions/types';
const initialState = {
	isAuthenticated: false,
	user: {
		status: "failed"
	},
	message: ''
}

const isEmpty = value => 
	value === undefined ||
	value === null ||
	( typeof value === 'object' && Object.keys(value).length === 0 ) ||
	( typeof value === 'string' && value.trim().length === 0 );

	

const authReducer = (state = initialState, action) => {
	switch(action.type) {

		case SET_CURRENT_USER: 
			return{
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			}

		case SUCCESS_REGISTRATION:
			return {
				...state,
				message: "registration successful, please login"

			}
		
		case REGISTRATION_ERROR:
			return {
				...state,
				message: action.payload
			}

		default:
			return state;
	}
}




export default authReducer;
import axios from 'axios';
import { 
	CODE_SEND_ERRORS,

} from './types';

// ACTION FOR SIGNUP for student
export const addUser =  (userData, history) => async dispatch  => {

	try{
	    const user = await axios.post('api/v1/users', userData);
	    console.log(user.data);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: user.data
		});
		
	} catch(err) {
		console.log(err);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: err.response.data
		});
	}
}

// ACTION FOR SIGNUP FOR TEACHER
export const addPreTeacher =  (userData, history) => async dispatch  => {

	try{
	    const user = await axios.post('api/v1/teachers/add', userData);
	    console.log(user.data);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: user.data
		});
		
	} catch(err) {
		console.log(err);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: err.response.data
		});
	}
}
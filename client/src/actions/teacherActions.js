import axios from 'axios';
import { 
	CODE_SEND_ERRORS,
	FETCH_ALL_DATAS
} from './types';

let config = {
	headers: {
    	'Content-type': 'multipart/form-data'
  }
}


// ACTION FOR SIGNUP
export const addAssignment =  userData => async dispatch  => {

	try{
	    const assignment = await axios.post('api/v1/publishedAssignment', userData, config);
	    console.log(assignment.data);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: assignment.data
		});
		
	} catch(err) {
		console.log(err);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: err.response.data
		});
	}
}

export const getAssignment = userId => async dispatch => {

	try {
		const assignments = await axios.get(`/api/v1/publishedAssignment/${userId}`);
		dispatch({
			type: FETCH_ALL_DATAS,
			payload: assignments.data
		});
	} catch(err) {
		console.log(err);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: err.response.data
		});
	}
}
//  when student submits the assignment
export const submitAssignment = userData => async dispatch => {
	try {
		const assignment = await axios.post('api/v1/submittedAssignment', userData, config);
		console.log("hiii")
	    console.log(assignment);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: assignment.data
		});
	} catch(err) {
		console.log("hiii errrrrr")
		console.log(err);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: err.response.data
		});
	}
}
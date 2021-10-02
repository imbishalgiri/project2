import axios from 'axios';
import { 
	CODE_SEND_ERRORS,

} from './types';

// ACTION FOR SIGNUP
export const addNotice =  (userData, history) => async dispatch  => {

	try{
	    const notice = await axios.post('api/v1/notice', userData);
	    console.log(notice.data);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: notice.data
		});
		
	} catch(err) {
		console.log(err);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: err.response.data
		});
	}
}
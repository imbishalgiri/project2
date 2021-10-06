import axios from 'axios';
import { 
	CODE_SEND_ERRORS,
	FETCH_ALL_DATAS,
	GET_NOTICE

} from './types';

// ACTION FOR adding to the notice
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

// action for fetching the notice data
export const showNotice =  userData => async dispatch  => {
	try {
		 const notice = await axios.get('api/v1/notice');
	    console.log(notice.data);
		dispatch({
			type: GET_NOTICE,
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
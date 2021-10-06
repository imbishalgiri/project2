import axios from 'axios';
import { 

	CODE_SEND_ERRORS,
	FETCH_ALL_DATAS

} from './types';

// ACTION FOR adding posts to db
export const addPost =  (userData) => async dispatch  => {

	try{
	    const post = await axios.post('api/v1/posts', userData);
	    console.log(post.data);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: post.data
		});
		
	} catch(err) {
		console.log(err);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: err.response.data
		});
	}
}


// ACTION FOR fetch posts
export const getAllPosts =  (userData) => async dispatch  => {

	try{
	    const post = await axios.get('api/v1/posts');
	    console.log(post.data);
		dispatch({
			type: FETCH_ALL_DATAS,
			payload: post.data
		});
		
	} catch(err) {
		console.log(err);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: err.response.data
		});
	}
}

//  action for adding comment to the db
export const addComment = userData => async dispatch => {

	try {
		const commentedStatus = await axios.patch('api/v1/posts', userData);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: commentedStatus.data
		});
	} catch (err) {
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: err.response.data
		});
	}
}


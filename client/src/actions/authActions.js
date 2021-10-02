import axios from 'axios';
import setAuthToken from './../utils/setAuthToken'; 
import jwt_decode from 'jwt-decode';

import { 
	CODE_SEND_ERRORS,
	VERIFY_CODE_SEND_ERRORS,
	SET_CURRENT_USER
	 } from './types';

// ACTION FOR SIGNUP
export const registerUser =  (userData, history, role) => async dispatch  => {
	const mail = {email: userData.email};

	try{
		await axios.post('api/v1/sendCode', mail);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: userData
		});
		role === 'student' ? history.push('/confirmCode') : history.push('/confirmTeacherCode');
		
	} catch(err) {
		console.log(err);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: err.response.data
		});
	}
}

// ACTION FOR VERIFYING 6 DIGIT PIN CODE FOR USER aka STUDENT
export const verifyUser =  (userData, history, who) => async dispatch  => {
	console.log(userData);
	try{
		await axios.post(`api/v1/${who}`, userData);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: {signup: true}
		});

		console.log('verified');

		who === 'students' ? history.push('/login'): history.push('/teacherLogin')

		
		
	} catch(err) {
		console.log(err);
		dispatch({
			type: VERIFY_CODE_SEND_ERRORS,
			payload: err.response.data
		});
	}
}



// ACTION FOR LOGGING IN TO THE APP
export const loginUser = (userData, user, history) => async dispatch => {

	try{
		const res = await axios.post(`api/v1/${user}/login`, userData);
		// 1. getting token
		const { token } = res.data;

		// 2. setting token to the localStorage
		localStorage.setItem('jwtToken', token);

		 // 3. setting token to the auth header
		setAuthToken(token);

		// 4. decode token to get the user data
		const decoded = jwt_decode(token);
		console.log(decoded);
		 // 5. set current user
		 dispatch(setCurrentUser(decoded)); 

		 history.push('/dashboard');

	} catch(error) {
		console.log(error);
		dispatch({
			type: CODE_SEND_ERRORS,
			payload: error.response.data
		});
	}

}



// set logged in  user
export const setCurrentUser = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	}
}



// Logout action 
export const logoutUser = history => dispatch => {
	// remove the token from localStorage
	localStorage.removeItem('jwtToken');
	// remove auth header for future request
	setAuthToken(false);
	// set current user to {} which will also set isAuthenticated to false
	dispatch(setCurrentUser({}));
	history.push('/login');
}





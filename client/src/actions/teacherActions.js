import axios from 'axios';
import { CODE_SEND_ERRORS, FETCH_ALL_DATAS } from './types';

let config = {
  headers: {
    'Content-type': 'multipart/form-data'
  }
};

// ACTION FOR SIGNUP
export const addAssignment = (userData) => async (dispatch) => {
  try {
    const assignment = await axios.post('api/v1/publishedAssignment', userData, config);
    console.log(assignment.data);
    dispatch({
      type: CODE_SEND_ERRORS,
      payload: assignment.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: CODE_SEND_ERRORS,
      payload: err.response.data
    });
  }
};

// action for student and it is displayed in the student section
export const getAssignment = (userId) => async (dispatch) => {
  try {
    const assignments = await axios.get(`/api/v1/publishedAssignment/${userId}`);
    dispatch({
      type: FETCH_ALL_DATAS,
      payload: assignments.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: CODE_SEND_ERRORS,
      payload: err.response.data
    });
  }
};

//  when student submits the assignment from that upload button
export const submitAssignment = (userData) => async (dispatch) => {
  try {
    const assignment = await axios.post('api/v1/submittedAssignment', userData, config);
    console.log('hiii');
    console.log(assignment);
    dispatch({
      type: CODE_SEND_ERRORS,
      payload: assignment.data
    });
  } catch (err) {
    console.log('hiii errrrrr');
    console.log(err);
    dispatch({
      type: CODE_SEND_ERRORS,
      payload: err.response.data
    });
  }
};

// Action for teacher to get the assignment that he selects
/*
	request object gotta be like this

			{
		    "teacherName": "giribishal",
		    "facultyName": "BESE",
		    "semester": 7,
		    "shift": "morning"
			}

*/

export const getSubmittedAssignments = (userData) => async (dispatch) => {
  const { teacherName, facultyName, semester, shift } = userData;
  try {
    const submittedAssignment = await axios.get(
      `api/v1/teachers/showSubmittedAssignments/${facultyName}/${semester}/${shift}/${teacherName}`
    );

    dispatch({
      type: FETCH_ALL_DATAS,
      payload: submittedAssignment.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: CODE_SEND_ERRORS,
      payload: err.response.data
    });
  }
};

//  add remarks to the assignment
export const addRemark = (userData, id) => async (dispatch) => {
  console.log(id);
  try {
    const modifiedAssignment = await axios.patch(`api/v1/submittedAssignment/${id}`, userData);
    console.log(modifiedAssignment);
    dispatch({
      type: CODE_SEND_ERRORS,
      payload: modifiedAssignment.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: CODE_SEND_ERRORS,
      payload: err.response.data
    });
  }
};

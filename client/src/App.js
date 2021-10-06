import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import jwt_decode from 'jwt-decode';
import store from './store';


import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions'; 

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import AdminLogin from './components/auth/AdminLogin';
import TeacherLogin from './components/auth/TeacherLogin';

import Register from './components/auth/Register';
import TeacherRegister from './components/auth/TeacherRegister';
import ConfirmCode from './components/auth/ConfirmCode';
import ConfirmTeacherCode from './components/auth/ConfirmTeacherCode';
import RoutineUpload from './components/routine/RoutineUpload';
import UserUpload from './components/pages/AddToUsers';
import AddNotice from './components/admin/AddNotice';
import ViewNotice from './components/admin/ViewNotice';
import AddToPreTeacher from './components/pages/AddToPreTeacher';
import PublishAssignment from './components/pages/PublishAssignment';
import ViewAssignment from './components/student/ViewAssignment';
import ViewSubmittedAssignments from './components/pages/ViewSubmittedAssignments';
import PostItems from './components/posts/PostItems';

import './App.css';


// check for token
if (localStorage.jwtToken) {
	// 1. set the auth token header auth
	setAuthToken(localStorage.jwtToken);

	// 2. decode token and get user
	const decoded = jwt_decode(localStorage.jwtToken);

	// 3. set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
}


class App extends Component {


	render() {

		return (
			
			    <div className="App">
			    
			      <Navbar />

			      <Route exact path="/" component={ Landing } />
			      <Route exact path="/login" component={ Login } />
			      <Route exact path="/adminlogin" component={ AdminLogin } />
			      <Route exact path="/teacherLogin" component={ TeacherLogin } />
			      <Route exact path="/register" component={ Register } />
			      <Route exact path="/teacherRegister" component={ TeacherRegister } />

			      <Route exact path="/confirmCode" component={ ConfirmCode } />
			      <Route exact path="/confirmTeacherCode" component={ ConfirmTeacherCode } />

			      <Route exact path="/routineUpload" component={RoutineUpload} />
			      <Route exact path="/userUpload" component={UserUpload} />
			      <Route exact path="/addNotice" component={AddNotice} />
			      <Route exact path="/notice" component={ViewNotice} />
			      <Route exact path="/addPreTeacher" component={AddToPreTeacher} />
			      <Route exact path="/publishassignment" component={PublishAssignment} />
			      <Route exact path="/viewAssignment" component={ViewAssignment} />
			      <Route exact path="/ViewSubmittedAssignments" component={ViewSubmittedAssignments} />
			      <Route exact path="/postitems" component={PostItems} />
			      <Footer />

			    </div>
			
  		);

	}
  
}

export default App;

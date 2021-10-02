import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from './../../actions/authActions';

class Navbar extends React.Component {

	logout = (e) => {
		e.preventDefault();
		this.props.logoutUser(this.props.history);
	}

	render() {

		const { isAuthenticated, user } = this.props.auth;

		const guestUserNav = (
			
	        
			<ul className="navbar-nav ml-auto">
	          <li className="nav-item">
	            <Link className="nav-link" to="/register">Sign Up</Link>
	          </li>
	          <li className="nav-item">
	            <Link className="nav-link" to="/login">Login</Link>
	          </li>
			</ul>
		);

		const authenticatedUserNav = (
			
			<ul className="navbar-nav ml-auto">
	          <li className="nav-item">
	            <div className="nav-link">{user.firstName}</div>
	          </li>
	          <li className="nav-item">
	            <div className="nav-link" style={{cursor: 'pointer'}} onClick={this.logout}>Logout</div>
	          </li>
			</ul>
		);

		const adminNav = (
		
			<ul className="navbar-nav ml-auto">
	          <li className="nav-item">
	            <div className="nav-link">add users</div>
	          </li>
	          <li className="nav-item">
	            <div className="nav-link" style={{cursor: 'pointer'}} onClick={this.logout}>Logout</div>
	          </li>
			</ul>
		);

		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
			    <div className="container">
			      <Link className="navbar-brand" to="/">OurCollege</Link>
			      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
			        <span className="navbar-toggler-icon"></span>
			      </button>

			      <div className="collapse navbar-collapse" id="mobile-nav">
			        
			        { isAuthenticated? 
			        	user.role==='student'?authenticatedUserNav: adminNav
			        	 : guestUserNav }
			      </div>
			    </div>
  			</nav>
		)
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, {logoutUser} )(withRouter(Navbar));
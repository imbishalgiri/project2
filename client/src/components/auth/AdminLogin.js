import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loginUser } from './../../actions/authActions';

class AdminLogin extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
		}

	}

	componentDidMount() {
		if(this.props.auth.isAuthenticated) {
			this.props.history.push('/notice');
		}
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		const newUser = {
			email, password
		}
		this.props.loginUser(newUser, 'admins', this.props.history);
	}

	render() {
		return (
			<div className="login" style={{marginBottom: '100px'}}>
				<div className="container">
				  <div className="row">
				    <div className="col-md-8 m-auto">

				    {
				    	this.props.codeErr.status !== 'fail' ?
				    	<h1 className="display-4 text-center">Admin Log In</h1> :
				    	<p className="lead text-center text-danger">Incorrect Credentials</p>
				    }

				      <p className="lead text-center">Admin Login section</p>
				      <form onSubmit={ this.handleSubmit }>
				        <div className="form-group">
				          <input 
				          	type="email" 
				          	className="form-control form-control-lg" 
				          	placeholder="Email Address" 
				          	name="email" 
				          	onChange={ this.handleChange }
				          />
				        </div>
				        <div className="form-group">
				          <input 
				          	type="password" 
				          	className="form-control form-control-lg" 
				          	placeholder="Password" 
				          	name="password" 
				          	onChange={ this.handleChange }
				          />
				        </div>
				        <input 
				          type="submit" 
				          className="btn btn-info btn-block mt-4" 
				        />
				      </form>
				    </div>
				  </div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	codeErr: state.codeErr
})


export default connect(mapStateToProps, { loginUser })(withRouter(AdminLogin));
import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { registerTeacher } from './../../actions/authActions';


class TeacherRegister extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			fName: '',
			mName: '',
			lName: '',
			email: '',
			password: '',
			errors: {}
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
		const { fName,mName, lName, email, password } = this.state;
		const newUser = {
			fName, mName, lName, email, password
		}
		this.props.registerTeacher(newUser, this.props.history, 'teacher');
	}

	render() {
		const pwdClass = this.state.password.length > 7 ? '': 'is-invalid';
		return (
			<div className="register">
				<div className="container">
				  <div className="row">
				    <div className="col-md-8 m-auto">
				      <h1 className="display-4 text-center">Sign Up Teacher</h1>
				      {
				      	this.props.codeErr.status !== 'error' ?
				      	<p className="lead text-center">Create your App account.</p> :
				      	<p className="lead text-center text-danger">please make your email is not fake and havent registered yet.</p>
				      }
				      
				      <form onSubmit={ this.handleSubmit }>

				        <div className="form-group">
				          <input
				          	 type="text" 
				          	 className="form-control form-control-lg" 
				          	 placeholder="First Name *" 
				          	 name="fName" 
				          	 value={ this.state.fName }
				          	 onChange={ this.handleChange }
				          	 required 
				           />
				        </div>

				         <div className="form-group">
				          <input
				          	 type="text" 
				          	 className="form-control form-control-lg" 
				          	 placeholder="Middle Name" 
				          	 name="mName" 
				          	 value={ this.state.mName }
				          	 onChange={ this.handleChange }
				    
				           />
				        </div>

				         <div className="form-group">
				          <input
				          	 type="text" 
				          	 className="form-control form-control-lg" 
				          	 placeholder="Last Name *" 
				          	 name="lName" 
				          	 value={ this.state.lName }
				          	 onChange={ this.handleChange }
				          	 required 
				           />
				        </div>

				        <div className="form-group">
				          <input
				             type="email" 
				             className="form-control form-control-lg" 
				             placeholder="Email Address *" 
				             name="email" 
				             value={ this.state.email }
				             onChange={ this.handleChange }
				           />
				        </div>

				        <div className="form-group">
				          <input
				             type="password" 
				             className={`form-control form-control-lg ${pwdClass}` }
				             placeholder="Password * min 8 chars" 
				             name="password" 
				             value={ this.state.password }
				             onChange={ this.handleChange }
				           />
				        </div>
				      
				        <input type="submit" className="btn btn-info btn-block mt-4" />
				      </form>
				    </div>
				  </div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	codeErr: state.codeErr
});


export default connect(mapStateToProps, { registerTeacher })(withRouter(TeacherRegister));
import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { verifyUser } from './../../actions/authActions';

class ConfirmTeacherCode extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			vCode: ''
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
		const { fName,mName, lName, email, password } = this.props.codeErr;
		const newUser = {
			firstName: fName, 
			middleName: mName, 
			lastName: lName, 
			email, 
			password,
			verificationCode: this.state.vCode
		}
		this.props.verifyUser(newUser, this.props.history, 'teachers');
	}

	render() {
		return (
			<div className="register">
				<div className="container">
				  <div className="row">
				    <div className="col-md-8 m-auto">
				      <h1 className="display-4 text-center">Verification</h1>
				      <p className="lead text-center">Enter 6 digit code that we sent to your entered gmail.</p>
				      <form onSubmit={ this.handleSubmit }>
				        <div className="form-group">
				          <input
				          	 type="text" 
				          	 className="form-control form-control-lg" 
				          	 placeholder="Name" 
				          	 name="vCode" 
				          	 value={ this.state.vCode }
				          	 onChange={ this.handleChange }
				          	 required 
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

export default connect(mapStateToProps, { verifyUser })(withRouter(ConfirmTeacherCode));
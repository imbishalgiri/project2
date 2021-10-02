import React from 'react'
import { addPreTeacher } from './../../actions/adminActions';
import { connect } from 'react-redux';

class AddToPreTeacher extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			email: ''

		}

	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		// const { fName,mName, lName, email, password } = this.state;
		// const newUser = {
		// 	fName, mName, lName, email, password
		// }
		this.props.addPreTeacher(this.state);
	}

	render() {
		const submittedStatus = this.props.registeredTeacher.status;
		return (
			<div className="register">
				<div className="container">
				  <div className="row">
				    <div className="col-md-8 m-auto">
				      <h1 className="display-4 text-center">Add Pre Teacher</h1>
				      <h3 className="display-6 text-center">{submittedStatus}</h3>
				      <form onSubmit={this.handleSubmit} className="row g-3">

				      	

				      	<div className="col-md-16">
				      		<label htmlFor="email" className="form-label font-weight-bold">Email:</label>
				      		 <input 
				          	type="email" 
				          	className="form-control form-control-lg" 
				          	placeholder="Email Address" 
				          	name="email" 
				          	onChange={ this.handleChange }
				          />
				        </div>

				        <div className="col-md-4">
				     		<input type="submit" className="btn btn-info btn-block mt-4" />
				     	</div>
				      </form>
				    </div>
				   </div>
				</div>
			</div>


		)
	}
}

const mapStateToProps = state => ({
	registeredTeacher: state.codeErr
});

export default connect(mapStateToProps, {addPreTeacher})(AddToPreTeacher);
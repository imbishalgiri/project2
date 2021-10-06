import React from 'react'
import { addAssignment } from './../../actions/teacherActions';
import { connect } from 'react-redux';


class PublishAssignment extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			subject: 'choose',
			semester: 'choose',
			shift: 'choose',
			faculty: 'choose',
			description: '',
			myFile: '',
			spinner: 'off'

		}

	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({spinner: 'on'});
		const { subject, myFile } = this.state;

		const formData = new FormData(event.target); 
     
	      // Update the formData object 
	      formData.append( "file", myFile ); 
	      formData.append( "subjectName", subject ); 
	      formData.append( "teacherName", `${this.props.user.lastName}${this.props.user.firstName}` ); 
	      
	      console.log(formData);
	      console.log(this.state);
		this.props.addAssignment(formData);

	}

	render() {
		const submittedStatus = this.props.publishedAssignment.status;

		const spinner = (
			              <button className="btn btn-info btn-block mt-4" type="button" disabled>
						  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
						  <span className="sr-only">Loading...</span>
						  </button>
						  );
		return (
			<div className="register">
				<div className="container">
				  <div className="row">
				    <div className="col-md-8 m-auto">
				      <h1 className="display-4 text-center">Upload Assignment</h1>
				      {<h3 className="display-6 text-center">{submittedStatus}</h3>}
				      <form onSubmit={this.handleSubmit} className="row g-3">

				      <div className="col-md-4">
				      		<label  htmlFor="subject" className="form-label font-weight-bold">Subject:</label>
				      		<select name="subject" onChange={this.handleChange} defaultValue={this.state.subject} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
						        <option value="choose">Choose...</option>
						        <option value="DSA">DSA</option>
						        <option value="ADA">ADA</option>
						        <option value="NM">NM</option>
						        <option value="CG">CG</option>
						        <option value="SEF">SEF</option>
						        <option value="MALP">MALP</option>
						        <option value="COA">COA</option>
						    </select> 
				      	</div>

				      	<div className="col-md-4">
				      		<label  htmlFor="faculty" className="form-label font-weight-bold">Faculty:</label>
				      		<select name="faculty" onChange={this.handleChange} defaultValue={this.state.subject} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
						        <option value="choose">Choose...</option>
						        <option value="BESE">BESE</option>
						        <option value="BECE">BECE</option>
						        <option value="BEIT">BEIT</option>
						        <option value="BECIVIL">BECIVIL</option>
						    </select> 
				      	</div>

				      	<div className="col-md-4">
				      		<label htmlFor="semester" className="form-label font-weight-bold">Semester</label>
				      		<select name="semester" onChange={this.handleChange} defaultValue={this.state.semester} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
						        <option value="choose">Choose...</option>
						        <option value="1">one</option>
						        <option value="2">two</option>
						        <option value="3">three</option>
						        <option value="4">four</option>
						        <option value="5">five</option>
						        <option value="6">six</option>
						        <option value="7">seven</option>
						        <option value="8">eight</option>
						    </select> 
				      	</div>

				      	<div className="col-md-4">
				      		<label htmlFor="shift" className="form-label font-weight-bold">Shift:</label>
				      		<select name="shift" onChange={this.handleChange}  defaultValue={this.state.shift} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
						        <option value="choose">Choose...</option>
						        <option value="day">day</option>
						        <option value="morning">morning</option>
						    </select> 
				      	</div>

				      	<div className="col-md-4">
				      		<label htmlFor="myFile" className="form-label font-weight-bold">file:</label>
              				<input
              					 type="file"
              					 className="form-control-file" 
              					 name="myFile" 
              					 onChange= {this.handleChange}
              				/>
              				{console.log(this.state.myFile)}
				        </div>

				        <div className="col-md-12">
				      		<label htmlFor="description" className="form-label font-weight-bold">Assignment description:</label>
				      		<textarea 
					          	className="form-control form-control-lg col-md-8" 
					          	placeholder="description for assignment" 
					          	name="description" 
					          	onChange={ this.handleChange }
					          	rows={5}
					          	cols={5}
				          />
				        </div>
				        <div className="col-md-4">
				        	{
				        		this.state.spinner === 'on' && !submittedStatus ?
				        		 spinner :
				        		<input type="submit" className="btn btn-info btn-block mt-4" />

				        	}
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
	publishedAssignment: state.codeErr,
	user: state.auth.user
});

export default connect(mapStateToProps, {addAssignment})(PublishAssignment);
import React from 'react'
import { getAssignment, submitAssignment } from './../../actions/teacherActions';
import { connect } from 'react-redux';


class ViewAssignment extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			myFile: ''
		};
	}

	componentDidMount() {
		this.props.getAssignment(this.props.user.id);
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit = (id, event, index) =>  {
		

			event.preventDefault();
			console.log(this.state.myFile);
			console.log(id);
			console.log(this.props.user.id);


			const formData = new FormData(event.target); 
			let { faculty, semester, shift, teacherName } = this.props.assignmentsFetched.data.assignments[index]._doc;
	     
		      // Update the formData object 
		      formData.append( "file", this.state.myFile ); 
		      formData.append( "assignment", id); 
		      formData.append( "student", this.props.user.id ); 
		      formData.append( "faculty", faculty ); 
		      formData.append( "semester", semester ); 
		      formData.append( "shift", shift ); 
		      formData.append( "teacherName", teacherName ); 
		      console.log(formData);
		      this.props.submitAssignment(formData);

		
	}




	render() {
		console.log(this.props);
		let allAssignments = this.props.assignmentsFetched.data.assignments;
		
		let items = allAssignments.map( ({_doc:{_id, subjectName, teacherName, file, description, status }}, index) => {
			return (
				<tr key={_id}>
					<td>{subjectName}</td>
					<td>
						<a 
							href={`http://localhost:8000/static/assignments/published/${file}`} 
							target="_blank" rel="noopener noreferrer"
							download={`${file}`} 
						>
							 {file}
						</a>
					</td>
					<td>{description}</td>
					<td>{teacherName}</td>
					<td>{status}</td>
					<td>
						<form onSubmit={(e) => this.handleSubmit(_id, e, index)}>
							<input
              					 type="file"
              					 className="form-control-file" 
              					 name="myFile" 
              					 onChange= {this.handleChange}
              				/>
              				<input type="submit" className="btn btn-info btn-block mt-4" />
						</form>
					</td>
				</tr>
				);
		} );

		return (
			<div>
				<h3 className="text-center mb-4">Here are your assignments.</h3>
				<table className="table table-hover">

			  <thead className="thead-dark">
				<tr>
				<th scope="col">subject_name</th>
				<th scope="col">assignment_file</th>
				<th scope="col">description</th>
				<th scope="col">teacher_name</th>
				<th scope="col">status</th>
				<th scope="col">submit_here</th>
				</tr>
			  </thead>
			  <tbody>
			  { items }


			  </tbody>
			</table>

			</div>
			
		)
	}
}

const mapStateToProps = state => ({
	assignmentsFetched: state.datasFetched,
	user: state.auth.user
});

export default connect(mapStateToProps, {getAssignment, submitAssignment})(ViewAssignment);

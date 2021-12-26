import React from 'react';
import SubmittedAssignmentsTable from '../utils/SubmittedAssignmentsTable';
import Loader from '../loader/Loader';
import { getSubmittedAssignments, addRemark } from './../../actions/teacherActions';
import { setFullpageLoading } from '../../actions/commonActions';
import { connect } from 'react-redux';

class ViewSubmittedAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faculty: '',
      sem: '',
      shift: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { faculty, sem, shift } = this.state;
    const dataToSubmit = {
      teacherName: `${this.props.user.lastName}${this.props.user.firstName}`,
      facultyName: faculty,
      semester: sem,
      shift: shift
    };
    this.props.setFullpageLoading();
    this.props.getSubmittedAssignments(dataToSubmit);
  };

  render() {
    const loading = this.props.loading.fullpageLoading;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Get Assignments</h1>
              {/*<h3 className="display-6 text-center">{submittedStatus}</h3>*/}
              <form onSubmit={this.handleSubmit} className="row g-3">
                <div className="col-md-4">
                  <label htmlFor="faculty" className="form-label font-weight-bold">
                    Faculty:
                  </label>
                  <select
                    name="faculty"
                    onChange={this.handleChange}
                    defaultValue={this.state.faculty}
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect">
                    <option value="choose">Choose...</option>
                    <option value="BESE">BESE</option>
                    <option value="BECE">BECE</option>
                    <option value="BEIT">BEIT</option>
                    <option value="BECIVIL">BECIVIL</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label htmlFor="semester" className="form-label font-weight-bold">
                    Semester
                  </label>
                  <select
                    name="sem"
                    onChange={this.handleChange}
                    defaultValue={this.state.semester}
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect">
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
                  <label htmlFor="shift" className="form-label font-weight-bold">
                    Shift:
                  </label>
                  <select
                    name="shift"
                    onChange={this.handleChange}
                    defaultValue={this.state.shift}
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect">
                    <option value="choose">Choose...</option>
                    <option value="day">day</option>
                    <option value="morning">morning</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <input type="submit" className="btn btn-info btn-block mt-4" />
                </div>
              </form>
            </div>
          </div>
          <br />
          <br />
          {loading ? <Loader /> : <SubmittedAssignmentsTable />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assignmentsFetched: state.datasFetched,
  user: state.auth.user,
  loading: state.loading
});

export default connect(mapStateToProps, { getSubmittedAssignments, addRemark, setFullpageLoading })(
  ViewSubmittedAssignment
);

// table = () => {
// 	if(this.props.assignmentsFetched.data.assignment){
// 		let allAssignments = this.props.assignmentsFetched.data.assignment;

// 	let items = allAssignments.map( ({_id, file, remarks, student:{ firstName, user:{ rollNo }}}, index) => {
// 		return (
// 			<tr key={_id}>
// 				<td>{firstName}</td>
// 				<td>{rollNo}</td>
// 				<td>
// 					<a
// 						href={`http://localhost:8000/static/assignments/submitted/${file}`}
// 						target="_blank" rel="noopener noreferrer"
// 						download={`${file}`}
// 					>
// 						 {file}
// 					</a>
// 				</td>

// 				<td>{remarks}</td>

// 				{<td>
// 					<form onSubmit={(e) => this.handleSubmit(_id, e, index)}>
// 						<input
//              					 type="file"
//              					 className="form-control-file"
//              					 name="myFile"
//              					 onChange= {this.handleChange}
//              				/>
//              				<input type="submit" className="btn btn-info btn-block mt-4" />
// 					</form>
// 				</td>}
// 			</tr>
// 			);
// 	} );

// 	return (
// 		<table className="table table-hover">
// 		  <thead className="thead-dark">
// 			<tr>
// 			<th scope="col">student_name</th>
// 			<th scope="col">roll_number</th>
// 			<th scope="col">submitted_assignment</th>
// 			<th scope="col">grade</th>
// 			</tr>
// 		  </thead>
// 		  <tbody>
// 		  { items }

// 		  </tbody>
// 		</table>
// 		);

// 	}

// }

// handleSubmitGrade = (id, event, index) => {
//   event.preventDefault();
//   console.log(id);
//   this.setState({
//     [`formDisplay${index}`]: !this.state[`formDisplay${index}`],
//     [`newRemark${index}`]: this.state[`remark${index}`]
//   });
//   this.props.addRemark({ remarks: this.state[`remark${index}`] }, id);
// };

import React from 'react';
import { addUser } from './../../actions/adminActions';
import { connect } from 'react-redux';

class UserUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faculty: 'choose',
      semester: 'choose',
      shift: 'choose',
      email: '',
      rollNo: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // const { fName,mName, lName, email, password } = this.state;
    // const newUser = {
    // 	fName, mName, lName, email, password
    // }
    this.props.addUser(this.state);
  };

  render() {
    const submittedStatus = this.props.registeredUser.status;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Student</h1>
              <h3 className="display-6 text-center">{submittedStatus}</h3>
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
                    id="inlineFormCustomSelect"
                  >
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
                    name="semester"
                    onChange={this.handleChange}
                    defaultValue={this.state.semester}
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                  >
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
                    id="inlineFormCustomSelect"
                  >
                    <option value="choose">Choose...</option>
                    <option value="day">day</option>
                    <option value="morning">morning</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label htmlFor="email" className="form-label font-weight-bold">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="roll number" className="form-label font-weight-bold">
                    Roll No:
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Roll No"
                    name="rollNo"
                    onChange={this.handleChange}
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
    );
  }
}

const mapStateToProps = (state) => ({
  registeredUser: state.codeErr
});

export default connect(mapStateToProps, { addUser })(UserUpload);

import React from 'react';
import { addNotice } from './../../actions/commonActions';
import { connect } from 'react-redux';

class AddNotice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
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
    this.props.addNotice(this.state);
  };
  render() {
    const submittedStatus = this.props.notice.status;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Notice</h1>
              <h3 className="display-6 text-center">{submittedStatus}</h3>
              <form onSubmit={this.handleSubmit} className="row g-3">
                <div className="col-md-12">
                  <label htmlFor="email" className="form-label font-weight-bold">
                    Notice Title:
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg col-md-8"
                    placeholder="notice title"
                    name="title"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="description" className="form-label font-weight-bold">
                    Notice description:
                  </label>
                  <textarea
                    className="form-control form-control-lg col-md-8"
                    placeholder="description for notice"
                    name="description"
                    onChange={this.handleChange}
                    rows={5}
                    cols={5}
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
  notice: state.codeErr
});

export default connect(mapStateToProps, { addNotice })(AddNotice);

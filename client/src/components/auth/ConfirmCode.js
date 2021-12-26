import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../utils/CustomButton';
import { setLoading, unsetLoading } from '../../actions/commonActions';
import { verifyUser } from './../../actions/authActions';

class ConfirmCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vCode: ''
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/notice');
    }
    this.props.unsetLoading();
  }

  componentDidUpdate() {
    if (this.props.codeErr.status) this.props.unsetLoading();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { fName, mName, lName, email, password } = this.props.student;
    const newUser = {
      firstName: fName,
      middleName: mName,
      lastName: lName,
      email,
      password,
      verificationCode: this.state.vCode
    };
    this.props.verifyUser(newUser, this.props.history, 'students');
    this.props.setLoading();
    this.props.codeErr.status = '';
  };

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Verification</h1>
              {this.props.codeErr.status ? (
                <p className="lead text-center 				text-danger">Code did not match.</p>
              ) : null}
              <p className="lead text-center">
                Enter 6 digit code that we sent to your entered gmail.
              </p>

              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    name="vCode"
                    value={this.state.vCode}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <CustomButton
                  text="Verify"
                  loadingText="Verifying"
                  isLoading={this.props.isLoading}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  codeErr: state.vCodeErr,
  student: state.auth.message,
  isLoading: state.loading.buttonLoading
});

export default connect(mapStateToProps, { verifyUser, setLoading, unsetLoading })(
  withRouter(ConfirmCode)
);

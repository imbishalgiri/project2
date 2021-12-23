import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loginUser } from './../../actions/authActions';
import { setLoading, unsetLoading } from '../../actions/commonActions';
import CustomButton from '../utils/CustomButton';

class TeacherLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/notice');
    }
    this.props.unsetLoading();
  }

  componentDidUpdate() {
    if (this.props.codeErr.status === 'fail') {
      this.props.unsetLoading();
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const newUser = {
      email,
      password
    };
    this.props.loginUser(newUser, 'teachers', this.props.history);
    this.props.setLoading();
    this.props.codeErr.status = '';
    this.props.isJustSignedUp.signup = false;
  };

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              {this.props.codeErr.status !== 'fail' ? (
                <h1 className="display-4 text-center">Teacher Log In</h1>
              ) : (
                <p className="lead text-center text-danger">Incorrect Credentials</p>
              )}
              {this.props.codeErr.signup ? (
                <p className="lead text-center text-success">Just Registered, Please </p>
              ) : null}
              <p className="lead text-center">Sign in to your College account</p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChange}
                  />
                </div>
                <CustomButton
                  text="login now"
                  loadingText="logging in"
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
  codeErr: state.codeErr,
  isLoading: state.loading.buttonLoading,
  isJustSignedUp: state.codeErr
});

export default connect(mapStateToProps, { loginUser, setLoading, unsetLoading })(
  withRouter(TeacherLogin)
);

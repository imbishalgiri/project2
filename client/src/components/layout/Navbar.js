import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from './../../actions/authActions';

class Navbar extends React.Component {
  logout = (e) => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const guestUserNav = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/teacherRegister">
            Teacher Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/teacherLogin">
            Teacher Login
          </Link>
        </li>
      </ul>
    );

    const teacherNav = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/ViewSubmittedAssignments">
            <h6>View Submitted Assignment</h6>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-light" to="/publishassignment">
            <h6>Publish Assignment</h6>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/postitems">
            <h6>Discussion</h6>
          </Link>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{ cursor: 'pointer' }} onClick={this.logout}>
            Logout
          </div>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-light" to="/notice">
            <h6>Notice</h6>
          </Link>
        </li>

        <li className="nav-item">
          <div className="nav-link">{user.firstName}</div>
        </li>
      </ul>
    );

    const studentNav = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/postitems">
            <h6>Discussion</h6>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-light" to="/viewassignment">
            <h6>Assignment</h6>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-light" to="/notice">
            <h6>Notice</h6>
          </Link>
        </li>

        <li className="nav-item">
          <div className="nav-link" style={{ cursor: 'pointer' }} onClick={this.logout}>
            Logout
          </div>
        </li>

        <li className="nav-item">
          <div className="nav-link">{user.firstName}</div>
        </li>
      </ul>
    );

    const adminNav = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/addPreTeacher">
            <h6>Add Teacher</h6>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-light" to="/userUpload">
            <h6>Add Student</h6>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-light" to="/addnotice">
            <h6>Notice Posting</h6>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-light" to="/notice">
            <h6>View Notice</h6>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-light" to="/postitems">
            <h6>Discussion</h6>
          </Link>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{ cursor: 'pointer' }} onClick={this.logout}>
            Logout
          </div>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark  bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OurCollege
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {(() => {
              if (isAuthenticated) {
                if (user.role === 'admin') {
                  return adminNav;
                } else if (user.role === 'teacher') {
                  return teacherNav;
                } else {
                  return studentNav;
                }
              } else {
                return guestUserNav;
              }
            })()}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));

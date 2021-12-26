import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Our College</h1>
                <p className="lead"> let's uplift our interaction technique with each other. </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Student Signup
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Student Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

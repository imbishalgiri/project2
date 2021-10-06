import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    };
  }


handleSubmit = (event) => {
  event.preventDefault();
  const name = `${this.props.user.firstName} ${this.props.user.lastName}`;
  this.props.addPost({name, text: this.state.description});
}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.props.user);
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Say Somthing...</div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <textarea 
                      className="form-control form-control-lg col-md-8" 
                      placeholder="write anything that's on your mind" 
                      name="description" 
                      onChange={ this.handleChange }
                      rows={4}
                  />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, { addPost })(PostForm);


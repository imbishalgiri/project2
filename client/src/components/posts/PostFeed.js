import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItems';
import PostComment from './PostComment';
import { addComment } from './../../actions/postActions';

class PostFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event, id) => {
    event.preventDefault();
    this.props.addComment({
      id,
      comment: {
        user: `${this.props.user.firstName} ${this.props.user.lastName}`,
        des: this.state.comment
      }
    });
    this.setState({ comment: '' });
  };

  render() {
    console.log(this.props);
    const { posts } = this.props;

    let newPosts = posts.map((post, index) => {
      return (
        <div className="col-md-10" key={index}>
          <p className="text-left">
            <h4>{post.name} </h4>
          </p>
          <p className="lead">{post.text}</p>
          <hr />
          <form onSubmit={(e) => this.handleSubmit(e, post._id)}>
            <input
              type="text"
              className="form-control"
              placeholder="add a comment"
              name="comment"
              onChange={this.handleChange}
              value={this.state.comment}
            />

            <input type="submit" className="btn btn-info mr-1 mt-2" value="comment" />
          </form>
          <hr />

          <PostComment comment={post.comments} />
        </div>
      );
    });
    return (
      <div className="card card-body mb-3">
        <div className="row">{newPosts}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps, { addComment })(PostFeed);

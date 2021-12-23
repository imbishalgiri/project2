import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import PostFeed from './PostFeed';

import { getAllPosts } from '../../actions/postActions';

class Posts extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    let postContent;

    if (this.props.post.data.posts) {
      postContent = <PostFeed posts={this.props.post.data.posts} />;
    } else {
      postContent = null;
    }

    return (
      <div className="feed">
        <div className="container">
          <h3 className="text-center mb-4">Discussion Section.</h3>
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.datasFetched
});

export default connect(mapStateToProps, { getAllPosts })(Posts);

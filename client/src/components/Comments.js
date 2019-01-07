import React, { Component } from 'react';
import API from '../API';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
    this.fetchCommentsData();
  }

  fetchCommentsData() {
    API.fetchCommentsData().then((data) => {
      this.setState({ comments: data });
    });
  }

  render() {
    const comments = this.state.comments.map( (comment) =>
      <div className="images-container-single" key={comment.id}>
        <p>Comment: { comment.text }</p>
      </div>
    );
    return (
      <div className="flex flex-column">
        <h1>Welcome to your React App</h1>
        <p>if everything goes well then you should see a list of comments here:</p>
        {comments}
      </div>
    );
  }
}

export default Comments;

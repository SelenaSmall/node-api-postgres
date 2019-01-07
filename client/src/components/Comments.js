import React, { Component } from 'react';
import API from '../API';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [], text: '', author: '' };
    this.fetchCommentsData();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchCommentsData() {
    API.fetchCommentsData().then((data) => {
      this.setState({ comments: data });
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newComment = {
      text: this.state.text,
      author: this.state.author
    }

    API.postCommentData(newComment).then(() => {
      this.setState({ text: '', author: '' })
      this.fetchCommentsData();
    });
  }

  handleTextChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleAuthorChange = event => {
    this.setState({
      author: event.target.value
    })
  }

  render() {
    const comments = this.state.comments.map( (comment) =>
      <div className="images-container-single" key={comment.id}>
        <label><strong>Comment: </strong>{ comment.text }</label>
        <span> - { comment.author }</span>
      </div>
    );

    return (
      <div className="flex flex-column">
        <h2>Create a new comment</h2>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text">Comment</label>
          <input id="text" name="text" type="text" onChange={this.handleTextChange} />

          <label htmlFor="author">Author</label>
          <input id="author" name="author" type="text" onChange={this.handleAuthorChange} />

          <button>Submit comment!</button>
        </form>

        <h3>If everything goes well then you should see a list of comments here:</h3>
        {comments}
      </div>
    );
  }
}

export default Comments;

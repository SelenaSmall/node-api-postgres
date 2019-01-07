import axios from 'axios';

const postCommentData = async (comment) => {
  const url = process.env.REACT_APP_API_BASE_URL || '';

  const response = await axios.post(`${url}/comments`, {
    text: comment.text,
    author: comment.author
  });
  return response.data;
};

export default postCommentData;
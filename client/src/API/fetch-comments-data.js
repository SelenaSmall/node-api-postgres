import axios from 'axios';

const fetchCommentsData = async () => {
  const url = process.env.REACT_APP_API_BASE_URL || '';

  const response = await axios.get(`${url}/comments`);
  return response.data;
};

export default fetchCommentsData;

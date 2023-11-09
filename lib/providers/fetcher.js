import axios from 'axios';

const baseURL = `http://localhost:5002/api/v1`;

const fetcher = (url) =>
	axios.get(baseURL + url, { withCredentials: true }).then((res) => res.data);

export default fetcher;

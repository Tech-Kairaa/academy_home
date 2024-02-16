import axios from 'axios';

const baseURL = `http://localhost:5002/api/v1`;

const server = axios.create({
	baseURL,
	withCredentials: true,
});

export default server;

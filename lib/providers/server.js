import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const server = axios.create({
	baseURL,
	withCredentials: true,
});

export default server;

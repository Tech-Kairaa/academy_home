import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const fetcher = (url) =>
	axios.get(baseURL + url, { withCredentials: true }).then((res) => res.data);

export default fetcher;

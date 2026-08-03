import axios from 'axios';

const agent = axios.create({
	baseURL: import.meta.env.VITE_API_URL as string,
});

export default agent;

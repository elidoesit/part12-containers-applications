import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;

console.log(`Connecting to backend at: ${baseURL}`);

const apiClient = axios.create({
  baseURL: baseURL,
});

export default apiClient;
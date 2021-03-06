import axios from 'axios';

const API_URL = process.env.REACT_APP_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'text/plain',
  },
});

export default api;

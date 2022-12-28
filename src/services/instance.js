import axios from 'axios';
import TokenStorage from '../utils/Storage';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token = new TokenStorage().getToken();

const axiosConfig = {
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use(
  config => {
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default instance;

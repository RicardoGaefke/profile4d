import axios from 'axios';

axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: '/api/',
  withCredentials: true,
});

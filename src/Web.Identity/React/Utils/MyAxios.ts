// eslint-disable-next-line no-unused-vars
import axios, { AxiosInstance } from 'axios';

export default (host: string): AxiosInstance => {
  let myHost;

  if (host.includes('localhost')) {
    myHost = 'https://localhost:5065/';
  } else if (host.includes('staging')) {
    myHost = 'https://api.staging.profile4d.com/';
  } else {
    myHost = 'https://api.profile4d.com/';
  }
  return axios.create({
    baseURL: myHost,
    withCredentials: true,
  });
};

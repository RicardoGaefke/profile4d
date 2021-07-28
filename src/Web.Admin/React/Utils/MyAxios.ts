// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import Hosts from './Hosts';

const myAxios = (host: string): AxiosInstance => {
  const myHost = new Hosts(host);

  const instance = axios.create({
    baseURL: myHost.Api(),
    withCredentials: true,
  });

  instance.interceptors.response.use((response): AxiosResponse => response,
    (error: AxiosError): void => {
      if (error.response?.status === 403) {
        window.location.href = `${myHost.Identity()}403`;
      }
    });

  return instance;
};

export default myAxios;

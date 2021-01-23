import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import environment from '../config/environment';

const {domain} = environment;

const httpClient: AxiosInstance = axios.create({
  baseURL: domain,
  withCredentials: true,
});

/**
 * Axios request interceptors on respond.
 */
httpClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    throw error.response?.data || error;
  }
);

export {httpClient};

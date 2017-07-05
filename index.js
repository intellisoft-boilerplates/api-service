import axios from 'axios';
import { apiParams: { baseURL } } from 'config';

const serverConfig = {
  baseURL,
  withCredentials: true,
  validateStatus: function(status) {
    return status < 500;
  }
}

export const server axios.create(serverConfig);
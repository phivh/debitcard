import axios from 'axios';
import {endpoints} from 'configs';

const _client = axios.create({
  baseURL: endpoints.host,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
  timeout: 1000 * 30,
});

_client.interceptors.response.use(
  (response) => response,
  async (error) => {
    throw error;
  },
);

export const client = _client;

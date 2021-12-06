import axios, { AxiosInstance } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_LAMBDA_BASE_URL;

let instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export const addAxiosRequestHeader = (token: string): AxiosInstance => {
  instance = axios.create({
    baseURL: BASE_URL,
    headers: { token: `${token}` },
  });

  return instance;
};

export default BASE_URL;
export { instance };

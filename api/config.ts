import axios, { AxiosInstance } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_LAMBDA_BASE_URL;

let instance = axios.create({
  baseURL: 'https://cors-bbbadi.herokuapp.com/' + BASE_URL,
});

export const addAxiosRequestHeader = (token: string): AxiosInstance => {
  instance = axios.create({
    baseURL: 'https://cors-bbbadi.herokuapp.com/' + BASE_URL,
    headers: { token: `${token}` },
  });

  return instance;
};

export const removeAxiosRequestHeader = (): AxiosInstance => {
  instance = axios.create({
    baseURL: 'https://cors-bbbadi.herokuapp.com/' + BASE_URL,
  });

  return instance;
};

export default BASE_URL;
export { instance };

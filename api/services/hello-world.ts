import { instance as axiosInstance } from 'api/config';

export const helloWorld = async () => await axiosInstance.get('hello-world/');

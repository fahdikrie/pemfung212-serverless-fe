import { instance as axiosInstance } from 'api/config';

export const users = async () => await axiosInstance.get('users/');

import { instance as axiosInstance } from 'api/config';

export const profile = async () => await axiosInstance.get('profile/');

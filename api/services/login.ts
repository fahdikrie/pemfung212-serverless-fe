import { instance as axiosInstance } from 'api/config';
import { LoginFormData } from 'types/login';

export const login = async (requestBody: LoginFormData) =>
  await axiosInstance.post('login/', requestBody);

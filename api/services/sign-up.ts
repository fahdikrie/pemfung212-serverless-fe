import { instance as axiosInstance } from 'api/config';
import { SignUpFormData } from 'types/sign-up';

export const signUp = async (requestBody: SignUpFormData) =>
  await axiosInstance.post('sign-up/', requestBody);

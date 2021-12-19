import { instance as axiosInstance } from 'api/config';
import { SignUpFormData } from 'types/signup';

export const signUp = async (requestBody: SignUpFormData) =>
  await axiosInstance.post('signup/', requestBody);

import { addAxiosRequestHeader } from 'api/config';

export const storeUser = (user: any) => {
  addAxiosRequestHeader(user.token);
  localStorage.setItem('pemfung212', JSON.stringify(user));
};

export const clearUser = () => {
  localStorage.removeItem('pemfung212');
};

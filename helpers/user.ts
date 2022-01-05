import { addAxiosRequestHeader, removeAxiosRequestHeader } from 'api/config';
import { UserData } from 'types/user';

export const storeUser = (user: UserData) => {
  if (typeof window === 'undefined') return;

  addAxiosRequestHeader(user.token as string);
  localStorage.setItem('pemfung212', JSON.stringify(user));
};

export const clearUser = () => {
  if (typeof window === 'undefined') return;

  removeAxiosRequestHeader();
  localStorage.removeItem('pemfung212');
};

export const loadUser = (): UserData | null => {
  if (typeof window === 'undefined') return null;

  const userData = localStorage.getItem('pemfung212');
  if (userData) return JSON.parse(userData as string);
  return null;
};

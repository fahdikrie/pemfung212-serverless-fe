import { MouseEvent, MouseEventHandler } from 'react';

export const checkIfObjectEmpty = <T>(obj: T): boolean => {
  if (obj == null) return true;
  return Object.keys(obj).length === 0;
};

export const fetchGuard = (
  fn: MouseEventHandler<HTMLButtonElement>,
  isLoading: boolean
) => {
  return (e: MouseEvent<HTMLButtonElement>) => {
    if (isLoading) return;
    fn(e);
  };
};

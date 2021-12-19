import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

export interface ContentProps {
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
  username: string | undefined;
}

export interface ButtonProps {
  children: string;
  colorScheme?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface LoginFormData {
  username: string;
  password: string;
}

export interface LoginProps {
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

import { ObjectId } from 'mongodb';

export interface UserData {
  _id?: ObjectId;
  name: string;
  fullname: string;
  username: string;
  password: string;
  token?: string;
  refresh_token?: string;
}

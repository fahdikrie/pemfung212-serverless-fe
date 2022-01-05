import { instance as axiosInstance } from 'api/config';

export const pokedex = async () => await axiosInstance.get('pokedex/');

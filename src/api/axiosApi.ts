import axios from 'axios';
import { API_BASE_URL } from '../constants/apiConstants';

export const apiGet = async (endpoint: string) => {
  return await axios.get(`${API_BASE_URL}/api${endpoint}`);
};

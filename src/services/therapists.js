import axios from 'axios';
import { api, updateToken } from './api-helper';


const registerUser = async (data) => {
  try {
    const loginData = await api.post(`${BASE_URL}/`, data);
    updateToken(loginData.data.token);
    return loginData.data
  } catch (e) {
    console.error(e);
  }
}

import axios from 'axios';
// https://dry-oasis-20600.herokuapp.com
const api = axios.create({
  baseURL: 'http://localhost:3000'
});

const updateToken = (token) => {
  localStorage.setItem('authToken', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

export {
    api,
    updateToken
}

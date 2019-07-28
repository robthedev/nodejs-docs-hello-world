import axios from 'axios';

const APIURL = 'http://localhost:6520/api';

export function userSignup(newUserData) {
  return axios.post(`${APIURL}/signup`, newUserData);
}

export function userLogin(userData) {
  return axios.post(`${APIURL}/login`, userData);
}

import axios from 'axios';

const API_KEY = '';
const ROOT_URL = '/profile';

export const POST_PROFILE = 'POST_PROFILE';
export const GET_PROFILE = 'GET_PROFILE';
export const GET_KARMA = 'GET_KARMA';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export function createProfile (values) {
  const request = axios.post('/postProfile', values);
  return {
    type: POST_PROFILE,
    payload: request
  };
}

export function getKarma (value) {
  const request = axios.get(`https://u0mxny2nq6.execute-api.us-east-2.amazonaws.com/default/karma-points_get?id=${value}`);
  return {
    type: GET_KARMA,
    payload: request
  };
}

export function getProfile (value) {
  const request = axios({
    method: 'GET',
    url: `/getprofile?userId=${value}`,
    responseType: 'json',
  })
  return {
    type: GET_PROFILE,
    payload: request
  };
}

export function updateProfile (value) {
  const request = axios.post('/editProfile', value);
  return {
    type: UPDATE_PROFILE,
    payload: request
  };
}

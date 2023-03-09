import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://auth-backend-lesson.herokuapp.com/api/',
});

export const signUpApi = data => {
  return authInstance.post('users/signup', data);
};

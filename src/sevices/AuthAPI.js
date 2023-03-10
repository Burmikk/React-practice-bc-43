import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://auth-backend-lesson.herokuapp.com/api/',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.Authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.Authorization = '';
};

export const signUpApi = async data => {
  const { data: result } = await authInstance.post('users/signup', data);
  setToken(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await authInstance.post('users/login', data);
  setToken(result.token);
  return result;
};

export const current = async data => {
  setToken(data);
  const { data: result } = await authInstance.get('users/current');
  setToken(result.token);
  return result;
};

export const logout = async () => {
  const { data: result } = await authInstance.post('users/logout');
  setToken();
  return result;
};

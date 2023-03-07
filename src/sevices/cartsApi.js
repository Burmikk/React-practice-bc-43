import axios from 'axios';

const cartInstance = axios.create({
  baseURL: 'https://62becfba0bc9b125615fd0f7.mockapi.io/api/carts',
});

export const addToCart = data => {
  return cartInstance.post('/', data);
};
export const getCart = () => {
  return cartInstance.get('/');
};

export const deleteCart = id => {
  return cartInstance.delete(`/${id}`)
}
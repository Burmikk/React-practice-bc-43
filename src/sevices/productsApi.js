import axios from 'axios';

const productInstance = axios.create({
  baseURL: 'https://63f23159aab7d0912503b12f.mockapi.io/products',
});

export const getProduct = () => productInstance.get('/');

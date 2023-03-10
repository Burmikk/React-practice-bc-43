import axios from 'axios';
import { authInstance } from './AuthAPI';

export const getProduct = () => authInstance.get('/products');
export const addProduct = product => authInstance.post('/products', product);
export const deleteProduct = id => authInstance.delete(`/products/${id}`);

import { ADD_PRODUCT } from './types';

export const addProduct = payload => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};

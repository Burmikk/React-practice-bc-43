import { ADD_PRODUCT } from './types';
import { REMOVE_PRODUCT } from './types';

export const addProduct = payload => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};

export const removeProduct = payload => {
  return {
    type: REMOVE_PRODUCT,
    payload,
  }
}
import { createReducer } from '@reduxjs/toolkit';
import {
  getProductFulfiled,
  getProductPending,
  getProductRejected,
} from './actions';

const INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(getProductPending, state => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getProductFulfiled, (state, { payload }) => {
      state.products = payload;
      state.isLoading = false;
    })
    .addCase(getProductRejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
});

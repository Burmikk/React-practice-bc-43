import { createReducer } from '@reduxjs/toolkit';
import {
  getProductFulfiled,
  getProductPending,
  getProductRejected,
} from './actions';
import { createProduct, removeProduct } from './products-operations';

const INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
};

const handlePanding = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const productsReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(getProductPending, handlePanding)

    .addCase(getProductFulfiled, (state, { payload }) => {
      state.products = payload;
      state.isLoading = false;
    })
    .addCase(getProductRejected, handleRejected)

    .addCase(createProduct.pending, handlePanding)

    .addCase(createProduct.fulfilled, (state, { payload }) => {
      state.products.push(payload);
      state.isLoading = false;
    })
    .addCase(createProduct.rejected, handleRejected)

    .addCase(removeProduct.pending, handlePanding)

    .addCase(removeProduct.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products = state.products.filter(({ _id }) => _id !== payload);
    })
    .addCase(removeProduct.rejected, handleRejected);
});

import { createSlice } from '@reduxjs/toolkit';
import { addToCart, getCart, deleteCart } from './cart-operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cartSlise = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   deleteProduct: (store, { payload }) => {
  //     return store.filter(({ id }) => id !== payload);
  //   },
  //   addQuantity: (store, { payload }) => {
  //     store.map(item => {
  //       if (item.id === payload) {
  //         item.quantity += 1;
  //         return item;
  //       }
  //       return item;
  //     });
  //   },
  //   decreaseQuantity: (store, { payload }) => {
  //     store.map(item => {
  //       if (item.id === payload) {
  //         item.quantity -= 1;
  //         return item;
  //       }
  //       return item;
  //     });
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(addToCart.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(addToCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getCart.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(getCart.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(deleteCart.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(
        (deleteCart.rejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        })
      );
  },
});

export const { addProduct, deleteProduct, addQuantity, decreaseQuantity } =
  cartSlise.actions;

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items'],
};

export const persistedCartReducer = persistReducer(
  persistConfig,
  cartSlise.reducer
);

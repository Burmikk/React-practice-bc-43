import { createSlice } from '@reduxjs/toolkit';
import { addToCart, getCart } from './cart-operations';

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
      });
  },
});

export default cartSlise.reducer;

export const { addProduct, deleteProduct, addQuantity, decreaseQuantity } =
  cartSlise.actions;

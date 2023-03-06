import { createSlice } from '@reduxjs/toolkit';

const cartSlise = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProduct: (state, { payload }) => {
      return [...state, payload];
    },
    deleteProduct: (state, { payload }) => {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export default cartSlise.reducer;

export const { addProduct, deleteProduct } = cartSlise.actions;

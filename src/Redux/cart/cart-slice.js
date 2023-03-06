import { createSlice } from '@reduxjs/toolkit';

const cartSlise = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProduct: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
      prepare: payload => ({
        payload: {
          ...payload,
          quantity: 1,
        },
      }),
    },
    deleteProduct: (store, { payload }) => {
      return store.filter(({ id }) => id !== payload);
    },
    addQuantity: (store, { payload }) => {
      store.map(item => {
        if (item.id === payload) {
          item.quantity += 1;
          return item;
        }
        return item;
      });
    },
  },
});

export default cartSlise.reducer;

export const { addProduct, deleteProduct, addQuantity } = cartSlise.actions;

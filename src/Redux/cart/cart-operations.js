import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../sevices/cartsApi';

export const getCart = createAsyncThunk(
  'cart/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getCart();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
export const addToCart = createAsyncThunk(
  'cart/add',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addToCart(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (data, { getState }) => {
      const { cart } = getState();
      if (isDublicate(cart.items, data)) {
        alert(`${data} is already exist`);
        return false;
      }
    },
  }
);

export const deleteCart = createAsyncThunk(
  'cart/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteCart(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

const isDublicate = (items, data) => {
  const dublicate = items.find(({ id }) => id === items.id);
  return Boolean(dublicate);
};

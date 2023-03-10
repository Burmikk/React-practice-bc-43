import {
  getProduct,
  addProduct,
  deleteProduct,
} from '../../sevices/productsApi';
import {
  getProductFulfiled,
  getProductPending,
  getProductRejected,
} from './actions';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = () => {
  const func = async (dispatch, getState) => {
    try {
      dispatch(getProductPending());
      const { data } = await getProduct();
      dispatch(getProductFulfiled(data));
    } catch ({ response }) {
      dispatch(getProductRejected(response));
    }
  };

  return func;
};

export const createProduct = createAsyncThunk(
  'product/add',
  async (product, { rejectWithValue }) => {
    try {
      const { data } = await addProduct(product);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  'product/delete',
  async (id, { rejectWithValue }) => {
    try {
      await deleteProduct(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

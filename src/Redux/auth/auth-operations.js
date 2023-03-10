import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUpApi, login, current } from '../../sevices/AuthAPI';
import { logout } from '../../sevices/AuthAPI';

export const signUp = createAsyncThunk(
  'user/signUp',
  async (data, { rejectWithValue }) => {
    try {
      const result = await signUpApi(data);
      return result;
    } catch ({ response }) {
      alert(response.data.message);
      return rejectWithValue(response.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'user/logIn',
  async (data, { rejectWithValue }) => {
    try {
      const result = await login(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await current(auth.token);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logout();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

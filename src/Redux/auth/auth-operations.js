import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUpApi } from '../../sevices/AuthAPI';

export const signUp = createAsyncThunk(
  'user/signUp',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await signUpApi(data);
      return result;
    } catch ({ response }) {
      alert(response.data.message);
      return rejectWithValue(response.data.message);
    }
  }
);

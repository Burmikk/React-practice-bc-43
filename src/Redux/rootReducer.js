import { combineReducers } from '@reduxjs/toolkit';
import { productsReducer } from './products/productsReducer';
import { persistedAuthReducer } from './auth/auth-slice';
import { persistedCartReducer } from './cart/cart-slice';

const rootReducer = combineReducers({
  cart: persistedCartReducer,
  products: productsReducer,
  auth: persistedAuthReducer,
});

export default rootReducer;

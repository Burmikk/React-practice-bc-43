import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cart/cart-slice';
import { productsReducer } from './products/productsReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export default rootReducer;

import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cart/cart-slice';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;

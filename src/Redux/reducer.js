import { ADD_PRODUCT, REMOVE_PRODUCT } from './types';

const INITIAL_STATE = {
  cart: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProducts = [...state.cart, action.payload];
      return { ...state, cart: newProducts };
    case REMOVE_PRODUCT:
      const updatedProducts = state.cart.filter(
        ({ id }) => id !== action.payload
      );
      return {...state, cart: updatedProducts}
    default:
      return state;
  }
};

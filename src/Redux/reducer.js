import { ADD_PRODUCT } from './types';

const INITIAL_STATE = {
  cart: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProducts = [...state.cart, action.payload];
      return { ...state, cart: newProducts };
  }

  return state;
};

import { getProduct } from '../../sevices/productsApi';
import {
  getProductFulfiled,
  getProductPending,
  getProductRejected,
} from './actions';

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

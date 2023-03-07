import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Button from '../../components/Button/Button';
import {
  deleteProduct,
  addQuantity,
  decreaseQuantity,
} from '../../Redux/cart/cart-slice';
import { getCart } from '../../Redux/cart/cart-operations';

const Cart = () => {
  const orderedProducts = useSelector(state => {
    return state.cart.items;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  const handleRemoveBtn = id => {
    dispatch(deleteProduct(id));
  };

  const handleIncreaseQuantity = id => {
    dispatch(addQuantity(id));
  };

  const handleDecreaseQuantity = (id, quantity) => {
    if (quantity === 1) {
      dispatch(deleteProduct(id));
      return;
    }
    dispatch(decreaseQuantity(id));
  };

  const productList = orderedProducts.map(({ id, price, title, quantity }) => (
    <li key={id}>
      <span>
        {title} - {price} : {quantity}
      </span>
      {/* <Button onBtnClick={() => handleIncreaseQuantity(id)}>+</Button>
      <Button onBtnClick={() => handleDecreaseQuantity(id, quantity)}>-</Button> */}
      {/* <Button onBtnClick={() => handleRemoveBtn(id)}>Delete</Button> */}
    </li>
  ));

  return (
    <>
      <ul>{productList}</ul>
    </>
  );
};

export default Cart;

import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button/Button';
import { deleteProduct } from '../../Redux/cart/cart-slice';

const Cart = () => {
  const orderedProducts = useSelector(state => {
    return state.cart;
  });
  const dispatch = useDispatch();

  const handleRemoveBtn = id => {
    dispatch(deleteProduct(id));
  };

  const productList = orderedProducts.map(({ id, price, title, quantity }) => (
    <li key={id}>
      <span>
        {title} - {price} : {quantity}
      </span>

      <Button onBtnClick={() => handleRemoveBtn(id)}>Delete</Button>
    </li>
  ));

  return (
    <>
      <ul>{productList}</ul>
    </>
  );
};

export default Cart;

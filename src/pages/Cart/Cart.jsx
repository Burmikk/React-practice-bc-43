import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button';

const Cart = () => {
  const addedProducts = useSelector(state => {
    return state.cart;
  });

  const productList = addedProducts.map(({ id, price, title }) => (
    <li key={id}>
      <span>
        {title} - {price}
      </span>
      <Button>Delete</Button>
    </li>
  ));

  return (
    <>
      <ul>{productList}</ul>
    </>
  );
};

export default Cart;

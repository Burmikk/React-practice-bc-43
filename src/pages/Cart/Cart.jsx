import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../../Redux/actions';
import Button from '../../components/Button/Button';

const Cart = () => {
  const orderedProducts = useSelector(state => {
    return state.cart;
  });
  const dispatch = useDispatch();

  const handleRemoveBtn = (id) => {
    dispatch(removeProduct(id));
  }

  const productList = orderedProducts.map(({ id, price, title }) => (
    <li key={id}>
      <span>
        {title} - {price}
      </span>
      <Button onBtnClick={()=>handleRemoveBtn(id)}>Delete</Button>
    </li>
  ));

  return (
    <>
      <ul>{productList}</ul>
    </>
  );
};

export default Cart;

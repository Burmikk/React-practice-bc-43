import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../sevices/productsApi';
import Button from '../../components/Button/Button';
import { addProduct, addQuantity } from '../../Redux/cart/cart-slice';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const addedProducts = useSelector(state => {
    return state.cart;
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getProduct();
        setProducts(data);
      } catch (error) {}
    };
    fetchProducts();
  }, []);

  const dispatch = useDispatch();

  const handleAddBtn = product => {
    if (addedProducts.find(({ id }) => id === product.id)) {
      return dispatch(addQuantity(product.id));
    }

    dispatch(addProduct(product));
  };

  const productList = products.map(({ id, price, title }) => (
    <li key={id}>
      <span>
        {title} - {price}
      </span>
      <Button onBtnClick={() => handleAddBtn({ id, price, title })}>Buy</Button>
    </li>
  ));

  return (
    <>
      <ul>{productList}</ul>
    </>
  );
};

export default ProductsPage;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../sevices/productsApi';
import Button from '../../components/Button/Button';
import { addToCart } from '../../redux/cart/cart-operations';
import { fetchProducts } from '../../redux/products/products-operations';

const ProductsPage = () => {
  const addedProducts = useSelector(state => {
    return state.cart;
  });

  const products = useSelector(state => {
    return state.products.products;
  });
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const dispatch = useDispatch();

  const handleAddBtn = product => {
    // if (addedProducts.find(({ id }) => id === product.id)) {
    //   return dispatch(addQuantity(product.id));
    // }

    dispatch(addToCart(product));
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

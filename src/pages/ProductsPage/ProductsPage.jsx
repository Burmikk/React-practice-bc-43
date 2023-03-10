import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../sevices/productsApi';
import Button from '../../components/Button/Button';
import { addToCart } from '../../redux/cart/cart-operations';
import {
  fetchProducts,
  createProduct,
} from '../../redux/products/products-operations';
import { AddProductForm } from '../../components/AddProductForm/AddProductForm';

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

  const handleCreateProduct = product => {
    dispatch(createProduct(product));
  };

  const productList = products.map(({ _id, price, name, description }) => (
    <li key={_id}>
      <span>
        {name} - {price}
      </span>
      <p>{description}</p>
      <Button
        onBtnClick={() => handleAddBtn({ _id, price, name, description })}
      >
        Buy
      </Button>
    </li>
  ));

  return (
    <>
      <AddProductForm onSubmit={handleCreateProduct} />
      <ul>{productList}</ul>
    </>
  );
};

export default ProductsPage;

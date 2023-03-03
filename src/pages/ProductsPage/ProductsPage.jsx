import { useEffect, useState } from 'react';
import { getProduct } from '../../sevices/productsApi';
import Button from '../../components/Button/Button';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getProduct();
        setProducts(data);
      } catch (error) {}
    };
    fetchProducts();
  }, []);

  const productList = products.map(({ id, price, title }) => (
    <li key={id}>
      <span>
        {title} - {price}
      </span>
      <Button>Buy</Button>
    </li>
  ));

  return (
    <>
      <ul>{productList}</ul>
    </>
  );
};

export default ProductsPage;

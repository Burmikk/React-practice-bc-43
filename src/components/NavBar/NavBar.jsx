import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import PagesMenu from '../PagesMenu/PagesMenu';
import { useSelector } from 'react-redux';
import { getProductsCount } from '../../Redux/cart/cart-selectors';

const NavBar = () => {
  const elementsCount = useSelector(getProductsCount);

  return (
    <header>
      <PagesMenu />
      <ThemeSwitcher />
      <div>
        <p>
          Кількість товарів: <span>{elementsCount}</span>
        </p>
      </div>
    </header>
  );
};

export default NavBar;

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import PagesMenu from '../PagesMenu/PagesMenu';
import { useSelector } from 'react-redux';
import { selectorUser, selectorIsLogin } from '../../redux/auth/auth-selectors';
import { getProductsCount } from '../../redux/cart/cart-selectors';
import { Auth } from '../Auth/Auth';
import Button from '../Button/Button';

const NavBar = () => {
  const elementsCount = useSelector(getProductsCount);
  const userName = useSelector(selectorUser);
  const isLogin = useSelector(selectorIsLogin);

  return (
    <header>
      {isLogin ? (
        <div>
          <PagesMenu />
          <p>Hello, {userName}</p>
          <Button>Logout</Button>
        </div>
      ) : (
        <Auth />
      )}

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

import { NavLink, useLocation } from 'react-router-dom';
import ItemsMenu from './ItemsMenu';
import css from './pages-menu.module.scss';

const PagesMenu = () => {
  const location = useLocation();
  const elements = ItemsMenu.map(({ id, text, link }) => (
    <NavLink className={css.link} to={link} key={id} state={{ from: location }}>
      {text}
    </NavLink>
  ));
  return <>{elements}</>;
};

export default PagesMenu;

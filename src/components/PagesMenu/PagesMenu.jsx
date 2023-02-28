import { NavLink } from 'react-router-dom';
import ItemsMenu from './ItemsMenu';
import css from './pages-menu.module.scss';

const PagesMenu = () => {
  const elements = ItemsMenu.map(({ id, text, link }) => (
    <NavLink className={css.link} to={link} key={id}>
      {text}
    </NavLink>
  ));
  return <>{elements}</>;
};

export default PagesMenu;

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import PagesMenu from '../PagesMenu/PagesMenu';

const NavBar = () => {
  return (
    <header>
      <PagesMenu />
      <ThemeSwitcher />
    </header>
  );
};

export default NavBar;

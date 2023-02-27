import { ThemeContext } from '../../Context/ThemeContext';
import { useContext } from 'react';
import styles from './themeSwither.module.scss';
const ThemeSwitcher = () => {
  const { state, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.box}>
      <span
        className={state === 'dark' ? styles.themeCurrent : styles.theme}
        onClick={toggleTheme}
      >
        Dark
      </span>

      <span
        className={state === 'light' ? styles.themeCurrent : styles.theme}
        onClick={toggleTheme}
      >
        Light
      </span>
    </div>
  );
};
export default ThemeSwitcher;

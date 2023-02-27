import { createContext } from 'react';
import useLocalStorage from '../shared/hooks/useLocalStorage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // const [state, setState] = useState();
  const [state, setState] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setState(prevState => (prevState === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

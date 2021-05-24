import {createContext, useContext} from 'react';

interface ThemeContext {
  darkTheme: boolean;
  changeTheme: () => void;
}

export const ThemeSwitcherContext = createContext<ThemeContext>(null);

const useSwitcherTheme = () => useContext<ThemeContext>(ThemeSwitcherContext);

export default useSwitcherTheme;

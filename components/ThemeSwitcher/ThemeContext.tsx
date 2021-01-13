import {createContext, useCallback, useEffect, useState} from 'react';

import {ThemeProvider} from '@emotion/react';

import {theme} from '../../styles/Theme';

export const ThemeContext = createContext<{
  darkTheme: boolean;
  changeTheme: () => void;
}>(null);

export const ThemeContextProvider: React.FC = ({children}) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const changeTheme = useCallback(() => {
    const root = window.document.documentElement;

    const themeType = window.localStorage.getItem('themeType');
    let nextThemeType = 'light';
    if (themeType) {
      const isDark = themeType === 'dark';
      nextThemeType = isDark ? 'light' : 'dark';
      setDarkTheme(isDark);
    }

    root.classList.remove('light', 'dark');
    root.classList.add(nextThemeType);

    window.localStorage.setItem('themeType', nextThemeType);
    setDarkTheme(state => !state);
  }, [setDarkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const themeType = window.localStorage.getItem('themeType');
    setDarkTheme(themeType === 'dark');
    if (!themeType) {
      root.classList.add('light');
      window.localStorage.setItem('themeType', 'light');
    } else {
      root.classList.add(themeType);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{darkTheme, changeTheme}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

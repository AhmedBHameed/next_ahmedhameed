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
    const htmlElement = window.document.documentElement;

    const themeType = window.localStorage.getItem('themeType');
    let nextThemeType = 'light';
    if (themeType) {
      const isDark = themeType === 'dark';
      nextThemeType = isDark ? 'light' : 'dark';
      setDarkTheme(isDark);
    }

    htmlElement.classList.remove('light', 'dark');
    htmlElement.classList.add(nextThemeType);

    window.localStorage.setItem('themeType', nextThemeType);
    setDarkTheme(state => !state);
  }, [setDarkTheme]);

  useEffect(() => {
    const htmlElement = window.document.documentElement;
    const themeType = window.localStorage.getItem('themeType');
    setDarkTheme(themeType === 'dark');
    if (themeType) {
      htmlElement.classList.add(themeType);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{darkTheme, changeTheme}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

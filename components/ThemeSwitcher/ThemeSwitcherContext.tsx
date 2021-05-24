import {ThemeProvider} from '@emotion/react';
import {useCallback, useEffect, useState} from 'react';

import {darkThemeColors, lightThemeColors} from '../../styles/Theme';
import useSwitcherTheme, {
  ThemeSwitcherContext,
} from './hooks/themeSwitcherHook';

const ThemeContextProvider: React.FC = ({children}) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const changeTheme = useCallback(() => {
    const htmlElement = window.document.documentElement;

    const themeType = window.localStorage.getItem('themeType');
    let nextThemeType = 'dark';
    if (themeType) {
      const isDark = themeType === 'dark';
      nextThemeType = isDark ? 'light' : 'dark';
      setDarkTheme(isDark);
    }

    htmlElement.classList.remove('light', 'dark');
    htmlElement.classList.add(nextThemeType);

    window.localStorage.setItem('themeType', nextThemeType);
    setDarkTheme((state) => !state);
  }, [setDarkTheme]);

  useEffect(() => {
    const htmlElement = window.document.documentElement;
    const themeType = window.localStorage.getItem('themeType');
    setDarkTheme(themeType === 'dark');
    htmlElement.classList.add(themeType || 'light');
  }, [setDarkTheme]);

  return (
    <ThemeSwitcherContext.Provider value={{darkTheme, changeTheme}}>
      <ThemeProvider theme={darkTheme ? darkThemeColors : lightThemeColors}>
        {children}
      </ThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
};

export {useSwitcherTheme};
export default ThemeContextProvider;

import {useState, useCallback, useEffect} from 'react';
import {THEME_TYPE} from '../../style/Theme';

const useThemeChanger = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const changeTheme = useCallback(() => {
    setIsLightTheme(flag => {
      window.localStorage.setItem('themeType', !flag ? THEME_TYPE.LIGHT : THEME_TYPE.DARK);
      return !flag;
    });
  }, [setIsLightTheme]);

  useEffect(() => {
    const themeType = window.localStorage.getItem('themeType');
    const isLightTheme = themeType === THEME_TYPE.LIGHT;
    setIsLightTheme(isLightTheme);
  }, [setIsLightTheme]);

  return {
    isLightTheme,
    changeTheme,
  };
};

export {useThemeChanger};

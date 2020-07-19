import React from 'react';
import {IconButton} from '@material-ui/core';
import {NightsStay, WbSunny} from '@material-ui/icons';
export * from './ThemeChangerHook';

interface ThemeSwitcherProps {
  onClick: () => void;
  isLightTheme: boolean;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({onClick, isLightTheme}) => {
  return (
    <IconButton onClick={onClick} aria-label="Menu">
      {isLightTheme ? <WbSunny fontSize="large" /> : <NightsStay fontSize="large" />}
    </IconButton>
  );
};

export default ThemeSwitcher;

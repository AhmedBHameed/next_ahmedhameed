import {useContext} from 'react';

import MoonIcon from '../../statics/moon.svg';
import SunIcon from '../../statics/sun.svg';
import {ThemeContext} from '../ThemeSwitcher/ThemeContext';

interface ThemeSwitchButtonProps {
  className?: string;
}

const ThemeSwitchButton: React.FC<ThemeSwitchButtonProps> = ({className}) => {
  const {darkTheme, changeTheme} = useContext(ThemeContext);

  return (
    <button className={className} onClick={changeTheme}>
      {darkTheme ? <SunIcon className="w-14 h-14" /> : <MoonIcon className="w-14 h-14" />}
    </button>
  );
};

export default ThemeSwitchButton;

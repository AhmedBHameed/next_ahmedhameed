import {useContext} from 'react';
import {ThemeContext} from '../ThemeSwitcher/ThemeContext';
import {ReactComponent as SunIcon} from '../../statics/sun.svg';
import {ReactComponent as MoonIcon} from '../../statics/moon.svg';

interface ThemeSwitchButtonProps {
  className?: string;
}

const ThemeSwitchButton: React.FC<ThemeSwitchButtonProps> = ({className}) => {
  const {darkTheme, changeTheme} = useContext(ThemeContext);

  return (
    <button className={className} onClick={changeTheme}>
      {darkTheme ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeSwitchButton;

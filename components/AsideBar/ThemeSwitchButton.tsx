import useSwitcherTheme from 'components/ThemeSwitcher/hooks/themeSwitcherHook';
import {MoonSvg, SunSvg} from '../SVGs';

interface ThemeSwitchButtonProps {
  className?: string;
}

const ThemeSwitchButton: React.FC<ThemeSwitchButtonProps> = ({className}) => {
  const {darkTheme, changeTheme} = useSwitcherTheme();

  return (
    <button className={className} onClick={changeTheme} type="button">
      {darkTheme ? (
        <SunSvg className="w-14 h-14" />
      ) : (
        <MoonSvg className="w-14 h-14" />
      )}
    </button>
  );
};

export default ThemeSwitchButton;

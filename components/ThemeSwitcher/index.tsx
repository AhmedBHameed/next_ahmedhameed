import React from 'react';
import styled from '@emotion/styled';
import {IconButton} from '@material-ui/core';
import {NightsStay, WbSunny} from '@material-ui/icons';

const ButtonWithIcon = styled(IconButton)`
  color: ${props => props.theme.colors.textColor};
  svg {
    font-size: 3rem;
  }
`;

interface ThemeSwitcherProps {
  onClick: () => void;
  isLightTheme: boolean;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({onClick, isLightTheme}) => {
  const Icon = isLightTheme ? WbSunny : NightsStay;
  return (
    <ButtonWithIcon onClick={onClick} aria-label="Menu">
      {isLightTheme ? <Icon fontSize="large" /> : <Icon fontSize="large" />}
    </ButtonWithIcon>
  );
};

export default ThemeSwitcher;

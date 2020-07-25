import React from 'react';
import styled from 'styled-components';
import {IconButton} from '@material-ui/core';
import {Menu} from '@material-ui/icons';

const Container = styled.div`
  position: absolute;
  right: -5.9rem;
  z-index: 9999;
  top: 0;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  background: ${props => props.theme.colors.asideMenu};
`;

const Button = styled(IconButton)`
  border-radius: 0;
  position: relative;
  box-shadow: inset 0.6rem 0 0.5rem -0.5rem black;
`;

const MenuIcon = styled(Menu)`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.textColor};
`;

interface BurgerMenuProps {
  onClick: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({onClick}) => {
  return (
    <Container>
      <Button onClick={onClick}>
        <MenuIcon />
      </Button>
    </Container>
  );
};

export default BurgerMenu;

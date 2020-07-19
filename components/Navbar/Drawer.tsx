import React from 'react';
import {Drawer as MaterialDrawer} from '@material-ui/core';
import styled from 'styled-components';

const StyledDrawer = styled(MaterialDrawer)`
  & .MuiDrawer-paper {
    overflow: unset;
  }
`;

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({open, onClose, children}) => {
  return (
    <StyledDrawer anchor="left" open={open} onClose={onClose}>
      {children}
    </StyledDrawer>
  );
};

export default Drawer;

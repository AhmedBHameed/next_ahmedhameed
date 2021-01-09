import React, {useCallback, useState} from 'react';
import styled from '@emotion/styled';
import Navbar from '../Navbar/Navbar';

const MainContainer = styled.div({
  // width: 'calc(100% - 18rem);',
  willChange: 'transform',
});

const PageContainer: React.FC = ({children}) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpen(s => !s);
  }, [setOpen]);

  return (
    <>
      <Navbar openMenu={open} onMenuClick={toggleMenu} />
      <MainContainer
        className={`transition-transform transform duration-700 bg-primary min-h-full ${
          open ? 'translate-x-72' : 'translate-x-0'
        }`}
      >
        {children}
      </MainContainer>
    </>
  );
};

export default PageContainer;

import React from 'react';
import {Popup} from 'reactjs-popup';

import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';

import {clsx} from '../../util/clsx';

const anvil = keyframes`
  from, 0%, to {
    transform: scale(1) translateY(0px);
    opacity: 0;
    box-shadow: 0 0 0 rgba(241, 241, 241, 0);
  }

  1% {
    transform: scale(0.96) translateY(10px);
    opacity: 0;
    box-shadow: 0 0 0 rgba(241, 241, 241, 0);
  }

  100% {
    transform: scale(1) translateY(0px);
    opacity: 1;
    box-shadow: 0 0 500px rgba(241, 241, 241, 0);
  }
`;

const ModalContainer = styled.div({
  animation: `${anvil} 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards`,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  height: '100%',
});

interface ModalProps {
  className?: string;
  open: boolean;
}

const Modal: React.FC<ModalProps> = ({open, className, children}) => {
  return (
    <Popup
      trigger={<div />}
      open={open}
      position="center center"
      modal
      contentStyle={{
        padding: '0px',
        border: 'none',
        flexGrow: 1,
        height: '100%',
      }}
      overlayStyle={{
        backdropFilter: 'blur(2px)',
        backgroundColor: 'rgba(0,0,0,0.7)',
      }}
      arrow={false}
      nested
    >
      <ModalContainer className={clsx([className])}>{children}</ModalContainer>
    </Popup>
  );
};

export default Modal;

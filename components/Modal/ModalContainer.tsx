import React from 'react';
import {clsx} from '../../util/clsx';

interface ModalContainerProps {
  className?: string;
}

const ModalContainer: React.FC<ModalContainerProps> = ({className, children}) => {
  return <div className={clsx(['flex flex-col bg-aside rounded-lg', className])}>{children}</div>;
};

export default ModalContainer;

import React from 'react';
import CloseSvg from '../../statics/delete.svg';
import {clsx} from '../../util/clsx';

interface ModalCloseButtonProps {
  className?: string;
  onClose: () => void;
}

const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({onClose, className}) => {
  return (
    <button
      className={clsx([
        'flex p-2 bg-gray-200 hover:bg-darkSubject transition-colors border rounded-full bg-secondary w-7 h-7 focus:outline-none',
        className,
      ])}
      onClick={onClose}
    >
      <CloseSvg className="w-full h-full p-0 text-gray-200" />
    </button>
  );
};

export {ModalCloseButton};

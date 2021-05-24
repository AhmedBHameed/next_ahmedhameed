import React from 'react';
import {clsx} from '../../util/clsx';
import {DeleteSvg as CloseSvg} from '../SVGs';

interface ModalCloseButtonProps {
  className?: string;
  onClose: () => void;
}

const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({
  onClose,
  className,
}) => (
  <button
    className={clsx([
      'flex p-2 bg-gray-200 hover:bg-darkSubject transition-colors border rounded-full bg-secondary w-7 h-7 focus:outline-none',
      className,
    ])}
    onClick={onClose}
    type="button"
  >
    <CloseSvg className="w-full h-full p-0 text-gray-200" />
  </button>
);

export {ModalCloseButton};

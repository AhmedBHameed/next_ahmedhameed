import React from 'react';
import {clsx} from '../../util/clsx';

interface SimpleButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  label: string;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({className, disabled, label, onClick}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${clsx(['px-3 border-none focus:outline-none inline-flex leading-5 font-semibold', className])}`}
      disabled={!!disabled}
    >
      {label}
    </button>
  );
};

export default SimpleButton;

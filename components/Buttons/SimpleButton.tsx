import React from 'react';

import {clsx} from '../../util/clsx';

interface SimpleButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  label: string;
  type?: 'button' | 'submit';
}

const SimpleButton: React.FC<SimpleButtonProps> = ({
  className,
  disabled,
  label,
  type,
  onClick,
}) => (
  <button
    className={`${clsx([
      'px-3 border-none focus:outline-none inline-flex leading-5 font-semibold',
      className,
    ])}`}
    disabled={!!disabled}
    onClick={onClick}
    // eslint-disable-next-line react/button-has-type
    type={type || 'button'}
  >
    {label}
  </button>
);

export default SimpleButton;

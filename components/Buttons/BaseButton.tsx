import React from 'react';

import {clsx} from '../../util/clsx';

interface BaseButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  IconComponent?: JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
}

const BaseButton: React.FC<BaseButtonProps> = ({disabled, IconComponent, children, className, type, onClick}) => {
  return (
    <button
      onClick={onClick}
      type={type ?? 'button'}
      className={`${clsx([
        'flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300 disabled:bg-gray-400 disabled:text-gray-600',
        className,
      ])}`}
      disabled={!!disabled}
    >
      {IconComponent && IconComponent}
      {children}
    </button>
  );
};

export default BaseButton;

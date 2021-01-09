import React from 'react';
import {clsx} from '../../util/clsx';

interface BaseButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  IconComponent?: JSX.Element;
}

const BaseButton: React.FC<BaseButtonProps> = ({IconComponent, children, className, type}) => {
  return (
    <button
      type={type ?? 'button'}
      className={`${clsx([
        'inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md hover:bg-indigo-700',
        className,
      ])}`}
    >
      {IconComponent && IconComponent}
      {children}
    </button>
  );
};

export default BaseButton;

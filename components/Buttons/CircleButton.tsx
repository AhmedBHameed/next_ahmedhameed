import React from 'react';
import {clsx} from '../../util/clsx';

interface CircleButtonProps {
  className?: string;
  iconClasses?: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}

const CircleButton: React.FC<CircleButtonProps> = ({Icon, iconClasses, className, onClick}) => {
  return (
    <button
      type="button"
      className={clsx([
        'inline-flex items-center p-2 border border-transparent rounded-full shadow-sm focus:outline-none',
        className,
      ])}
      onClick={onClick}
    >
      <Icon className={clsx(['w-4 h-4', iconClasses])} />
    </button>
  );
};

export default CircleButton;

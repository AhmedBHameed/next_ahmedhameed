import {forwardRef} from 'react';

import {clsx} from '../../util/clsx';

interface BurgerProps {
  onClick?: () => void;
  isRtl?: boolean;
}

const Burger = forwardRef<HTMLButtonElement, BurgerProps>(({onClick, isRtl}, ref) => {
  return (
    <button
      ref={ref}
      className={clsx([
        'text-primary h-9 w-7 absolute top-0 transform p-1 bg-aside focus:border-none focus:outline-none',
        isRtl ? 'left-0 rounded-l-full' : 'right-0 rounded-r-full',
      ])}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
});

export default Burger;

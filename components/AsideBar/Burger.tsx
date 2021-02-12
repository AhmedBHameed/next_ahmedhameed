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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
});

export default Burger;

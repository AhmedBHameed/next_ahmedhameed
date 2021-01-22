import React from 'react';

import {clsx} from '../../util/clsx';

interface FormControlProps {
  className?: string;
  error?: string;
  dir?: 'ltr' | 'rtl';
}

const FormControl: React.FC<FormControlProps> = ({children, className, error, dir}) => {
  return (
    <div className={clsx(['mt-1 sm:mt-0', className])} dir={dir}>
      {children}
      {error && <span className="mt-0.5 text-xs text-red-400">{error || ' '}</span>}
    </div>
  );
};

export {FormControl};

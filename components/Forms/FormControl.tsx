import React from 'react';

import {clsx} from '../../util/clsx';

interface FormControlProps {
  className?: string;
  error?: string;
}

const FormControl: React.FC<FormControlProps> = ({children, className, error}) => {
  return (
    <div className={clsx(['mt-1 sm:mt-0 sm:col-span-2', className])}>
      {children}
      {error && <span className="text-xs text-red-400">{error || ' '}</span>}
    </div>
  );
};

export {FormControl};

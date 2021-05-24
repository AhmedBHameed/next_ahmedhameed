import React from 'react';

import {clsx} from '../../util/clsx';

interface FormControlProps {
  className?: string;
  error?: string;
  dir?: 'ltr' | 'rtl';
  label?: string;
  htmlFor?: string;
}

const FormControl: React.FC<FormControlProps> = ({
  children,
  className,
  error,
  dir,
  htmlFor,
  label,
}) => (
    <div className={clsx(['mt-1 sm:mt-0', className])} dir={dir}>
      {label && (
        <label
          className={clsx([
            'block text-sm font-medium sm:mt-px sm:pt-2',
            className,
          ])}
          htmlFor={htmlFor}
        >
          {children}
        </label>
      )}
      {children}
      {error && (
        <span className="mt-0.5 text-xs text-red-400" role="alert">
          {error || ' '}
        </span>
      )}
    </div>
  );

export {FormControl};

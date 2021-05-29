import {forwardRef} from 'react';

import {clsx} from '../../util/clsx';
import {ExclamationCircleSvg} from '../SVGs';
import {FIELD_BORDER_CLASSES} from './shared';

interface TextFieldProps {
  type?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  error?: boolean;
  name?: string;
  autocomplete?: string;
  testId: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      autocomplete,
      testId,
      type,
      className,
      name,
      value,
      placeholder,
      error,
      ...reset
    },
    ref
  ) => (
    <div className="relative">
      <input
        autoComplete={autocomplete}
        className={clsx([
          FIELD_BORDER_CLASSES,
          'block w-full sm:text-sm rounded-md',
          error ? 'focus:outline-none border-red-600' : '',
          className,
        ])}
        data-testid={testId}
        id={name}
        name={name}
        placeholder={placeholder}
        ref={ref}
        type={type || 'text'}
        value={value}
        {...reset}
      />

      {error && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleSvg className="w-5 h-5 text-red-500" />
        </div>
      )}
    </div>
  )
);

export default TextField;

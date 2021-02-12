import {forwardRef} from 'react';

import ExclamationCircleSvg from '../../statics/exclamation-circle.svg';
import {clsx} from '../../util/clsx';
import {FIELD_BORDER_CLASSES} from './shared';

interface TextFieldProps {
  type?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  error?: boolean;
  name?: string;
  autocomplete?: string;
}

const TextField = ({autocomplete, type, className, name, value, placeholder, error}: TextFieldProps, ref) => {
  return (
    <div className="relative">
      <input
        type={type || 'text'}
        name={name}
        id={name}
        autoComplete={autocomplete}
        value={value}
        placeholder={placeholder}
        className={clsx([
          FIELD_BORDER_CLASSES,
          'block w-full sm:text-sm rounded-md',
          error ? 'focus:outline-none border-red-600' : '',
          className,
        ])}
        ref={ref}
      />

      {error && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleSvg className="w-5 h-5 text-red-500" />
        </div>
      )}
    </div>
  );
};

export default forwardRef<HTMLInputElement, TextFieldProps>(TextField);

import {forwardRef} from 'react';

import {clsx} from '../../util/clsx';

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
    <input
      type={type || 'text'}
      name={name}
      id={name}
      autoComplete={autocomplete}
      value={value}
      placeholder={placeholder}
      className={clsx([
        'block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-2 sm:text-sm border-gray-300 rounded-md',
        error ? 'focus:outline-none border-red-600' : '',
        className,
      ])}
      ref={ref}
    />
  );
};

export default forwardRef<HTMLInputElement, TextFieldProps>(TextField);

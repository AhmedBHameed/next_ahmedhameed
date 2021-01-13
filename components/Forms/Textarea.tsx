import {forwardRef, LegacyRef} from 'react';

import {clsx} from '../../util/clsx';

interface TextareaProps {
  value?: string;
  className?: string;
  placeholder?: string;
  name?: string;
  rows?: number;
  regRef?: LegacyRef<any>;
}

const Textarea = ({value, name, rows, className, placeholder}: TextareaProps, ref) => {
  return (
    <textarea
      id={name}
      name={name}
      rows={rows}
      value={value}
      placeholder={placeholder}
      className={clsx([
        'w-full shadow-sm block focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md',
        className,
      ])}
      ref={ref}
    />
  );
};

export default forwardRef(Textarea);

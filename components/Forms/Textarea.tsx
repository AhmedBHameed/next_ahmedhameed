import {forwardRef, LegacyRef} from 'react';

import {clsx} from '../../util/clsx';
import {FIELD_BORDER_CLASSES} from './shared';

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
        FIELD_BORDER_CLASSES,
        'w-full shadow-sm block focus:ring-indigo-500 sm:text-sm rounded-md',
        className,
      ])}
      ref={ref}
    />
  );
};

export default forwardRef(Textarea);

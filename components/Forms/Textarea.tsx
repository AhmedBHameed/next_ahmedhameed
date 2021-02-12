import {ChangeEvent, forwardRef, KeyboardEvent, LegacyRef, useCallback} from 'react';

import {clsx} from '../../util/clsx';
import {FIELD_BORDER_CLASSES} from './shared';

interface TextareaProps {
  value?: string;
  className?: string;
  placeholder?: string;
  name?: string;
  rows?: number;
  regRef?: LegacyRef<any>;
  indentOnTabKey?: boolean;
  // eslint-disable-next-line no-unused-consts
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({value, name, indentOnTabKey, rows, className, placeholder, onChange}: TextareaProps, ref) => {
  const onKeyDown = useCallback((event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault();
      document.execCommand('insertText', false, '\t');
      return false;
    }
  }, []);

  return (
    <textarea
      onChange={onChange}
      id={name}
      name={name}
      rows={rows}
      value={value}
      onKeyDown={indentOnTabKey && onKeyDown}
      placeholder={placeholder}
      className={clsx([FIELD_BORDER_CLASSES, 'w-full shadow-sm block sm:text-sm rounded-md', className])}
      ref={ref}
    />
  );
};

export default forwardRef(Textarea);

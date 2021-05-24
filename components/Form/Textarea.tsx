import {
  ChangeEvent,
  forwardRef,
  KeyboardEvent,
  LegacyRef,
  useCallback,
} from 'react';

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
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {value, name, indentOnTabKey, rows, className, placeholder, onChange},
    ref
  ) => {
    const onKeyDown = useCallback(
      (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Tab' && !event.shiftKey) {
          event.preventDefault();
          document.execCommand('insertText', false, '\t');
        }
        return false;
      },
      []
    );

    return (
      <textarea
        className={clsx([
          FIELD_BORDER_CLASSES,
          'w-full shadow-sm block sm:text-sm rounded-md',
          className,
        ])}
        id={name}
        name={name}
        onChange={onChange}
        onKeyDown={indentOnTabKey && onKeyDown}
        placeholder={placeholder}
        ref={ref}
        rows={rows}
        value={value}
      />
    );
  }
);

export default Textarea;

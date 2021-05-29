import {clsx} from '../../util/clsx';
import {useTranslation} from '../shared/hooks/translationHook';

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
}) => {
  const {t} = useTranslation();

  return (
    <div className={clsx(['mt-1 sm:mt-0', className])} dir={dir}>
      {label && (
        <label
          className={clsx([
            'block text-sm font-medium sm:mt-px sm:pt-2',
            className,
          ])}
          htmlFor={htmlFor}
        >
          {label}
        </label>
      )}
      {children}
      <span
        className="mt-0.5 text-xs text-red-400"
        data-testid={error ? 'input-error' : ''}
        role="alert"
      >
        {error ? t(error) : <>&nbsp;</>}
      </span>
    </div>
  );
};

export {FormControl};

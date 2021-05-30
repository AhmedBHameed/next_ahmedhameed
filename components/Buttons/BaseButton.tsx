import {clsx} from '../../util/clsx';
import {LoadingSvg} from '../SVGs/LoadingSvg';

interface BaseButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  Icon?: JSX.Element;
  disabled?: boolean;
  testId: string;
  loading?: boolean;
  ariaLabel?: string;
  id?: string;
  buttonTitle?: string;

  onClick?: () => void;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  disabled,
  Icon,
  children,
  className,
  type,
  testId,
  loading,
  ariaLabel,
  buttonTitle,
  onClick,
}) => (
  <button
    aria-label={ariaLabel}
    aria-labelledby={ariaLabel}
    className={`${clsx([
      'flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md transition-colors duration-300 disabled:bg-gray-400 disabled:text-gray-600',
      className,
    ])}`}
    data-testid={testId}
    disabled={!!disabled}
    onClick={onClick}
    title={buttonTitle}
    // eslint-disable-next-line react/button-has-type
    type={type || 'button'}
  >
    {!loading && Icon && Icon}
    {loading && (
      <LoadingSvg
        className="animate-spin h-5 w-5 mr-3"
        data-testid="loading-icon"
      />
    )}
    {children}
  </button>
);

export {BaseButton};

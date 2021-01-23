import {clsx} from '../../util/clsx';

interface BaseButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  iconClasses?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const BaseButton: React.FC<BaseButtonProps> = ({disabled, Icon, iconClasses, children, className, type, onClick}) => {
  return (
    <button
      onClick={onClick}
      type={type ?? 'button'}
      className={`${clsx([
        'flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md transition-colors duration-300 disabled:bg-gray-400 disabled:text-gray-600',
        className,
      ])}`}
      disabled={!!disabled}
    >
      {Icon && <Icon className={clsx(['w-6 h-6 mr-2', iconClasses])} />}
      {children}
    </button>
  );
};

export {BaseButton};

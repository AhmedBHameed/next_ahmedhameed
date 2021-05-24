import Link from 'next/link';

import {clsx} from '../../util/clsx';

interface LinkButtonProps {
  className?: string;
  href: string;
  targetBlank?: boolean;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const LinkButton: React.FC<LinkButtonProps> = ({Icon, children, href, className, targetBlank}) => (
    <Link href={href}>
      <a
        className={`${clsx([
          'flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 disabled:bg-gray-400 disabled:text-gray-600',
          className,
        ])}`}
        target={targetBlank ? '_blank' : ''}
      >
        {Icon && <Icon className="w-6 h-6 mr-2" />}
        {children}
      </a>
    </Link>
  );

export {LinkButton};

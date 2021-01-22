import Link from 'next/link';
import {useRouter} from 'next/router';
import {useMemo} from 'react';

import styled from '@emotion/styled';

import {clsx} from '../../util/clsx';

const Span = styled.span({
  position: 'relative',
  '&:after': {
    content: `""`,
    transform: 'scaleX(0)',
    transition: 'transform 0.5s',
    position: 'absolute',
    height: '2px',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'var(--color-text-subject)',
  },

  '&:hover:after': {
    transform: 'scaleX(1)',
  },

  '&.active:after': {
    transform: 'scaleX(1)',
  },
});

interface ListItemProps {
  className?: string;
  href?: string;
  onClick?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({children, className, href, onClick}) => {
  const router = useRouter();
  const activeClass = router.pathname === href ? 'active' : '';

  const linkComponent = useMemo(() => {
    return (
      <Span
        onClick={onClick}
        className={clsx([
          'text-primary py-0.5 text-md tracking-widest uppercase relative cursor-pointer font-medium',
          activeClass,
          className,
        ])}
      >
        {children}
      </Span>
    );
  }, []);

  return <li className="my-2">{href ? <Link href={href}>{linkComponent}</Link> : linkComponent}</li>;
};

export default ListItem;

import React from 'react';

import {clsx} from '../../util/clsx';

interface ListProps {
  className?: string;
}

const List: React.FC<ListProps> = ({children, className}) => {
  return <ul className={clsx(['p-0 mt-5 justify-center', className])}>{children}</ul>;
};

export default List;

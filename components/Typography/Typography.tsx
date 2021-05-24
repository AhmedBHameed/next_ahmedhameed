import React from 'react';

import {clsx} from '../../util/clsx';

interface TypographyProps {
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({children, className}) => (
    <article className={clsx(['prose prose-sm lg:prose-lg xl:prose-xl max-w-none', className])}>{children}</article>
  );

export default Typography;

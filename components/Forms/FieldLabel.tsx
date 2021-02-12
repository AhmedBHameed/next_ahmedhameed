import React from 'react';

import {clsx} from '../../util/clsx';
import Typography from '../Typography/Typography';

interface FieldLabelProps {
  htmlFor?: string;
  className?: string;
}

const FieldLabel: React.FC<FieldLabelProps> = ({children, htmlFor, className}) => {
  return (
    <label htmlFor={htmlFor} className={clsx(['block text-sm font-medium sm:mt-px sm:pt-2', className])}>
      {children}
    </label>
  );
};

export {FieldLabel};

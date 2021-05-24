import React from 'react';

import {clsx} from '../../util/clsx';
import Typography from '../Typography/Typography';

interface InfoCardProps {
  info: string;
  IconComponent: JSX.Element;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  IconComponent,
  info,
  className,
}) => (
  <div className={clsx(['flex items-center m-1', className])}>
    <div className="flex-shrink-0 rounded-full md:w-28 md:h-28 mr-5 bg-aside flex justify-center items-center">
      {IconComponent}
    </div>
    <Typography className="flex flex-col justify-center mr-5 lg:w-full">
      <p className="md:text-sm text-secondary font-bold tracking-wider">
        {info}
      </p>
    </Typography>
  </div>
);

export default InfoCard;

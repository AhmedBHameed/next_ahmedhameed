import React from 'react';

import {clsx} from '../../util/clsx';
import Typography from '../Typography/Typography';

interface ServiceCardProps {
  title: string;
  IconComponent: JSX.Element;
  paragraph?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({IconComponent, title, paragraph, className}) => {
  return (
    <div className={clsx(['flex items-center mb-10', className])}>
      <div className="flex-shrink-0 rounded-full w-28 h-28 mr-5 bg-aside flex justify-center items-center">
        {IconComponent}
      </div>
      <Typography className="flex flex-col justify-center md:mr-5">
        <span className="md:text-lg font-medium tracking-wider">{title}</span>
        {paragraph && <p className="md:text-lg text-secondary">{paragraph}</p>}
      </Typography>
    </div>
  );
};

export default ServiceCard;

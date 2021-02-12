import React from 'react';

import {clsx} from '../../util/clsx';
import Typography from '../Typography/Typography';

interface ServiceCardProps {
  title: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  paragraph?: string;
  className?: string;
  iconClasses?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({Icon, iconClasses, title, paragraph, className}) => {
  return (
    <div className={clsx(['flex items-center mb-10', className])}>
      <div className="flex-shrink-0 rounded-full w-28 h-28 mr-5 bg-aside flex justify-center items-center">
        {Icon && <Icon className={clsx(['w-14 text-subject', iconClasses])} />}
      </div>
      <Typography className="flex flex-col justify-center md:mr-5">
        <h5 className="md:text-lg font-medium tracking-wider">{title}</h5>
        {paragraph && <p className="md:text-lg text-secondary">{paragraph}</p>}
      </Typography>
    </div>
  );
};

export default ServiceCard;

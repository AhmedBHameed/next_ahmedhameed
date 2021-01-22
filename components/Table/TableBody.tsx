import React from 'react';

interface TableBodyProps {
  className?: string;
}

const TableBody: React.FC<TableBodyProps> = ({className, children}) => {
  return <tbody className={className}>{children}</tbody>;
};

export {TableBody};

import React from 'react';

interface TableHeaderProps {
  className?: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({className, children}) => {
  return <thead className={className}>{children}</thead>;
};

export default TableHeader;

import React from 'react';

interface CellProps {
  className?: string;
}

const Cell: React.FC<CellProps> = ({children, className}) => <td className={className}>{children}</td>;

export default Cell;

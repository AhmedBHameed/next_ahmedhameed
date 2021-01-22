import React from 'react';

interface HeaderCellProps {
  className?: string;
  cells: string[];
}

const HeaderCell: React.FC<HeaderCellProps> = ({cells, className}) => {
  return (
    <tr>
      {cells.map((cellText, i) => {
        return (
          <th scope="col" key={i.toString()} className={className}>
            {cellText}
          </th>
        );
      })}
    </tr>
  );
};

export default HeaderCell;

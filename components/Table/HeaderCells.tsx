import React from 'react';

interface HeaderCellProps {
  className?: string;
  cells: (string | JSX.Element)[];
}

const HeaderCells: React.FC<HeaderCellProps> = ({cells, className}) => (
    <tr>
      {cells.map((cellText, i) => (
          <th className={className} key={i.toString()} scope="col">
            {cellText}
          </th>
        ))}
    </tr>
  );

export default HeaderCells;

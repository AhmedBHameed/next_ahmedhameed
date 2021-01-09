import React from 'react';

const List: React.FC = ({children}) => {
  return <ul className="p-0 mt-5 justify-center text-center">{children}</ul>;
};

export default List;

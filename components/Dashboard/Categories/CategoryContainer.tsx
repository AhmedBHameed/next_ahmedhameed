import React from 'react';

import {HeaderCell, Table, TableHeader} from '../../Table/Table';
import {TableBody} from '../../Table/TableBody';

import CategoryRows from './CategoryRows';

const CategoryContainer: React.FC = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden sm:rounded-lg border border-gray-50">
            <Table>
              <TableHeader className="bg-secondary">
                <HeaderCell
                  className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider"
                  cells={['Category name', 'Description', 'Status', '']}
                />
              </TableHeader>
              <TableBody className="divide-y divide-gray-200 bg-aside">
                <CategoryRows />
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;

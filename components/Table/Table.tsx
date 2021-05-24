import React from 'react';

import {clsx} from '../../util/clsx';
import Cell from './Cell';
import HeaderCells from './HeaderCells';
import Row from './Row';
import TableHeader from './TableHeader';

interface TableProps {
  className?: string;
}

const Table: React.FC<TableProps> = ({children, className}) => (
    <div className="shadow overflow-hidden sm:rounded-lg border border-gray-50">
      <table className={clsx(['min-w-full divide-y divide-gray-200', className])}>{children}</table>
    </div>
  );

export {TableHeader, HeaderCells, Table, Cell, Row};

// const Table = () => {
//   return (
//     <table className="min-w-full divide-y divide-gray-200 bg-secondary">
//       <thead className="bg-aside">
//         <tr>
//           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
//             Category
//           </th>
//           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
//             Description
//           </th>
//           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
//             Status
//           </th>
//           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
//             Status
//           </th>
//         </tr>
//       </thead>
//       <tbody className="bg-white divide-y divide-gray-200">
//         <tr>
//           <td className="px-6 py-4 whitespace-nowrap">
//             <div className="flex items-center">
//               <div className="flex-shrink-0 h-10 w-10">
//                 <Image src="/images/nodejs.png" alt="Keyboard image" layout="fixed" width="40" height="40" />
//               </div>
//               <div className="ml-4">
//                 <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                   Node.js
//                 </span>
//               </div>
//             </div>
//           </td>

//           <td className="px-6 py-4 whitespace-nowrap">
//             <div className="text-sm text-gray-900">Server side rendering</div>
//             <div className="text-sm text-gray-500" dir="rtl">
//               استدعاء من جهة السيرفر
//             </div>
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap">
//             <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//               Active
//             </span>
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//             <a href="#" className="text-subject hover:text-indigo-900">
//               Edit
//             </a>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// export default Table;

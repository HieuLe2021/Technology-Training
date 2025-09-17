
import React from 'react';
import type { AppTable } from '../types';

interface TableViewProps {
  table: AppTable;
}

export const TableView: React.FC<TableViewProps> = ({ table }) => {
  return (
    <div>
      <header className="mb-8">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <table.icon className="h-10 w-10 text-blue-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{table.name}</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{table.description}</p>
          </div>
        </div>
      </header>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Columns</h2>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" aria-label={`Columns for ${table.name}`}>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Column Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Data Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {table.columns.map((column) => (
                        <tr key={column.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {column.name}
                            </th>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300`}>
                                  {column.type}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                {column.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

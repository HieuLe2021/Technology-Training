import React from 'react';
import type { Module, AppTable, SubTopic, Selection, SelectionType } from '../types';
import { PowerAppsIcon } from './icons/PowerAppsIcon';
import { ChevronIcon } from './icons/ChevronIcon';

interface SidebarProps {
  modules: Module[];
  tables: AppTable[];
  mockupApp: Module;
  selection: Selection;
  onSelect: (type: SelectionType, data: Module | AppTable | SubTopic) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  modules, 
  tables,
  mockupApp,
  selection,
  onSelect,
}) => {

  const isModuleActive = (module: Module) => selection.type === 'module' && selection.data?.id === module.id;
  const isTableActive = (table: AppTable) => selection.type === 'table' && selection.data?.id === table.id;
  const isMockupActive = (subTopic: SubTopic) => selection.type === 'mockup' && selection.data?.id === subTopic.id;

  return (
    <aside className="w-80 bg-white dark:bg-gray-800/50 border-r border-gray-200 dark:border-gray-700/50 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-700/50">
        <PowerAppsIcon className="h-8 w-8" />
        <h1 className="ml-3 text-lg font-semibold text-gray-800 dark:text-white">PowerApp Training</h1>
      </div>
      <nav className="flex-1 px-4 py-4 overflow-y-auto">
        <details className="group" open>
          <summary className="flex items-center justify-between p-2 list-none cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/50 focus:outline-none">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Modules</span>
            <ChevronIcon className="w-4 h-4 text-gray-400 transform transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <ul className="mt-1 space-y-1">
            {modules.map((module) => (
              <li key={module.id}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect('module', module);
                  }}
                  className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors duration-150 ${
                    isModuleActive(module)
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <module.icon className="h-5 w-5 mr-3" />
                  <span>{module.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </details>
        
        <details className="group mt-2" open>
           <summary className="flex items-center justify-between p-2 list-none cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/50 focus:outline-none">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tables</span>
            <ChevronIcon className="w-4 h-4 text-gray-400 transform transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <ul className="mt-1 space-y-1">
            {tables.map((table) => (
              <li key={table.id}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect('table', table);
                  }}
                  className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors duration-150 ${
                    isTableActive(table)
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <table.icon className="h-5 w-5 mr-3" />
                  <span>{table.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </details>
        
        <details className="group mt-2" open>
           <summary className="flex items-center justify-between p-2 list-none cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/50 focus:outline-none">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Mockups</span>
            <ChevronIcon className="w-4 h-4 text-gray-400 transform transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <ul className="mt-1 space-y-1">
            {mockupApp.subTopics.map((subTopic) => (
              <li key={subTopic.id}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect('mockup', subTopic);
                  }}
                  className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors duration-150 ${
                    isMockupActive(subTopic)
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <mockupApp.icon className="h-5 w-5 mr-3" />
                  <span>{subTopic.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </details>
      </nav>
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700/50 text-xs text-gray-500 dark:text-gray-400">
        <p>&copy; 2025 HieuLe</p>
      </div>
    </aside>
  );
};
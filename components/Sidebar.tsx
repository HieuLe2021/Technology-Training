
import React from 'react';
import type { Module } from '../types';
import { PowerAppsIcon } from './icons/PowerAppsIcon';

interface SidebarProps {
  modules: Module[];
  selectedModule: Module | null;
  onSelectModule: (module: Module) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ modules, selectedModule, onSelectModule }) => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800/50 border-r border-gray-200 dark:border-gray-700/50 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-700/50">
        <PowerAppsIcon className="h-8 w-8 text-blue-500" />
        <h1 className="ml-3 text-lg font-semibold text-gray-800 dark:text-white">AI Trainer</h1>
      </div>
      <nav className="flex-1 px-4 py-4">
        <p className="px-2 pb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Modules</p>
        <ul>
          {modules.map((module) => (
            <li key={module.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectModule(module);
                }}
                className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors duration-150 ${
                  selectedModule?.id === module.id
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
      </nav>
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700/50 text-xs text-gray-500 dark:text-gray-400">
        <p>&copy; 2025 HieuLe</p>
      </div>
    </aside>
  );
};
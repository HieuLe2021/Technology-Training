import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ModuleView } from './components/ModuleView';
import { TableView } from './components/TableView';
import { MockupView } from './components/MockupView';
import type { Module, AppTable, SubTopic, Selection, SelectionType } from './types';
import { MODULES, TABLES, MOCKUP_APP_MODULE } from './constants';
import { PowerAppsIcon } from './components/icons/PowerAppsIcon';

const App: React.FC = () => {
  const [selection, setSelection] = useState<Selection>({ type: 'none', data: null });

  const handleSelect = (type: SelectionType, data: Module | AppTable | SubTopic) => {
    // Prevent re-renders if the same item is clicked again
    if (selection.type === type && selection.data?.id === data.id) {
      return;
    }
    setSelection({ type, data });
  };

  const renderContent = () => {
    if (!selection.data) {
      return <WelcomeScreen />;
    }

    switch (selection.type) {
      case 'table':
        return <TableView table={selection.data as AppTable} key={(selection.data as AppTable).id} />;
      case 'mockup':
        return <MockupView module={MOCKUP_APP_MODULE} activeSubTopic={selection.data as SubTopic} key={(selection.data as SubTopic).id} />;
      case 'module':
        return <ModuleView module={selection.data as Module} key={(selection.data as Module).id} />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Sidebar
        modules={MODULES}
        tables={TABLES}
        mockupApp={MOCKUP_APP_MODULE}
        selection={selection}
        onSelect={handleSelect}
      />
      <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
        {renderContent()}
      </main>
    </div>
  );
};

const WelcomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-full shadow-lg mb-6">
        <PowerAppsIcon className="w-24 h-24" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Welcome to the Power Platform Trainer
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
        Select a module from the sidebar to begin your learning journey. This tool provides training materials and exercises to help you master the Microsoft Power Platform.
      </p>
    </div>
  );
};

export default App;
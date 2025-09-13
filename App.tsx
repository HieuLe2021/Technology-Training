
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ModuleView } from './components/ModuleView';
import type { Module } from './types';
import { MODULES } from './constants';
import { PowerAppsIcon } from './components/icons/PowerAppsIcon';

const App: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  const handleSelectModule = (module: Module) => {
    setSelectedModule(module);
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Sidebar modules={MODULES} onSelectModule={handleSelectModule} selectedModule={selectedModule} />
      <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
        {selectedModule ? (
          <ModuleView module={selectedModule} key={selectedModule.id} />
        ) : (
          <WelcomeScreen />
        )}
      </main>
    </div>
  );
};

const WelcomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-full shadow-lg mb-6">
        <PowerAppsIcon className="w-24 h-24 text-blue-500" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Welcome to the Power Platform AI Trainer
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
        Select a module from the sidebar to begin your learning journey. This tool provides AI-generated training materials and exercises to help you master the Microsoft Power Platform.
      </p>
    </div>
  );
};

export default App;

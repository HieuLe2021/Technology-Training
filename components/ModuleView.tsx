import React, { useState } from 'react';
import type { Module, SubTopic, Quiz } from '../types';
import { ChevronIcon } from './icons/ChevronIcon';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { QuizItem } from './QuizItem';
import { TRAINING_MATERIALS } from '../data/materials';
import { TRAINING_QUIZZES } from '../data/quizzes';

interface ModuleViewProps {
  module: Module;
}

export const ModuleView: React.FC<ModuleViewProps> = ({ module }) => {
  const [activeTopic, setActiveTopic] = useState<SubTopic | null>(null);

  const handleTopicSelect = (topic: SubTopic) => {
    setActiveTopic(topic.id === activeTopic?.id ? null : topic);
  };

  return (
    <div>
      <header className="mb-8">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <module.icon className="h-10 w-10 text-blue-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{module.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{module.description}</p>
          </div>
        </div>
      </header>

      <div className="space-y-4">
        {module.subTopics.map((topic) => (
          <div key={topic.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => handleTopicSelect(topic)}
              className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 focus:outline-none"
            >
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{topic.title}</h2>
              <ChevronIcon
                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  activeTopic?.id === topic.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeTopic?.id === topic.id && <TopicContent topic={activeTopic} />}
          </div>
        ))}
      </div>
    </div>
  );
};

const TopicContent: React.FC<{ topic: SubTopic }> = ({ topic }) => {
  const [activeTab, setActiveTab] = useState<'material' | 'quiz'>('material');

  const material = TRAINING_MATERIALS[topic.id] || '<p>Nội dung cho chủ đề này hiện không có sẵn.</p>';
  const quiz = TRAINING_QUIZZES[topic.id];

  const handleTabClick = (tab: 'material' | 'quiz') => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 border-t border-gray-200 dark:border-gray-700">
      <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          <button
            onClick={() => handleTabClick('material')}
            className={`${
              activeTab === 'material'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
            } whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}
          >
            Tài liệu (Materials)
          </button>
          <button
            onClick={() => handleTabClick('quiz')}
            className={`${
              activeTab === 'quiz'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
            } whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}
          >
            Bài tập (Exercises)
          </button>
        </nav>
      </div>

      <div>
        {activeTab === 'material' && (
          <div className="prose prose-blue dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: formatMarkdown(material) }} />
        )}
        {activeTab === 'quiz' && (
          <div>
            {quiz ? (
              <div className="space-y-6">
                {quiz.questions.map((q, index) => (
                  <QuizItem key={index} question={q} index={index} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400 p-4">Bài tập cho chủ đề này hiện không có sẵn.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Simple markdown formatter to handle headings, lists, bold text and code blocks
const formatMarkdown = (text: string) => {
  return text
    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-6 mb-3 border-b pb-2 dark:border-gray-600">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-8 mb-4 border-b-2 pb-2 dark:border-gray-500">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="bg-gray-200 dark:bg-gray-700 rounded-md px-1.5 py-0.5 font-mono text-sm">$1</code>')
    .replace(/^\* (.*$)/gim, '<li class="ml-6 my-1">$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul class="list-disc pl-5 mb-4">$1</ul>')
    .replace(/\n/g, '<br />');
};
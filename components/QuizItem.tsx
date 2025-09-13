
import React, { useState } from 'react';
import type { QuizQuestion } from '../types';

interface QuizItemProps {
  question: QuizQuestion;
  index: number;
}

export const QuizItem: React.FC<QuizItemProps> = ({ question, index }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
  };

  const getOptionClass = (option: string) => {
    if (!isAnswered) {
      return 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600';
    }
    if (option === question.correctAnswer) {
      return 'bg-green-100 dark:bg-green-900/50 border-green-500';
    }
    if (option === selectedOption) {
      return 'bg-red-100 dark:bg-red-900/50 border-red-500';
    }
    return 'bg-gray-100 dark:bg-gray-700 opacity-60';
  };

  return (
    <div className="p-5 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700">
      <p className="font-semibold text-gray-800 dark:text-gray-100 mb-4">
        {index + 1}. {question.question}
      </p>
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleOptionSelect(option)}
            disabled={isAnswered}
            className={`w-full text-left p-3 rounded-md border-2 border-transparent transition-colors text-gray-700 dark:text-gray-300 ${getOptionClass(
              option
            )}`}
          >
            {option}
          </button>
        ))}
      </div>
      {isAnswered && (
        <div className={`mt-4 p-3 rounded-md text-sm ${
            selectedOption === question.correctAnswer
                ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200'
                : 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200'
            }`}
        >
          <strong className="font-bold">
            {selectedOption === question.correctAnswer ? 'Correct!' : 'Incorrect.'}
          </strong>
          <p className="mt-1">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

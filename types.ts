
import type React from 'react';

export interface Module {
  id: string;
  title: string;
  icon: React.FC<{className?: string}>;
  description: string;
  subTopics: SubTopic[];
}

export interface SubTopic {
  id: string;
  title:string;
  keywords: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Quiz {
  topic: string;
  questions: QuizQuestion[];
}

export * from './general-knowledge';
export * from './science';
export * from './history';
export * from './geography';
export * from './entertainment';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
} 
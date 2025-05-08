import { Question } from '@/questions';
import { 
  generalKnowledgeQuestions, 
  scienceQuestions, 
  historyQuestions, 
  geographyQuestions, 
  entertainmentQuestions 
} from '@/questions';

export interface Category {
  id: string;
  name: string;
  questions: Question[];
}

// Função para remover perguntas duplicadas entre categorias
function removeDuplicateQuestions(categories: Category[]): Category[] {
  const seenQuestions = new Set<string>();
  const uniqueCategories = categories.map(category => ({
    ...category,
    questions: category.questions.filter(question => {
      if (seenQuestions.has(question.question)) {
        return false;
      }
      seenQuestions.add(question.question);
      return true;
    })
  }));
  return uniqueCategories;
}

export const categories: Category[] = removeDuplicateQuestions([
  { id: 'general', name: 'Conhecimentos Gerais', questions: generalKnowledgeQuestions },
  { id: 'science', name: 'Ciência', questions: scienceQuestions },
  { id: 'history', name: 'História', questions: historyQuestions },
  { id: 'geography', name: 'Geografia', questions: geographyQuestions },
  { id: 'entertainment', name: 'Entretenimento', questions: entertainmentQuestions },
]);

export class QuestionService {
  private static instance: QuestionService;

  private constructor() {}

  static getInstance(): QuestionService {
    if (!QuestionService.instance) {
      QuestionService.instance = new QuestionService();
    }
    return QuestionService.instance;
  }

  getQuestionsForGame(selectedCategories: string[], totalRounds: number): Question[] {
    const questionsPerCategory = Math.ceil(totalRounds / selectedCategories.length);
    const allQuestions: Question[] = [];

    // First, check if we have enough questions in total
    const totalAvailableQuestions = selectedCategories.reduce((total, categoryId) => {
      const category = categories.find(cat => cat.id === categoryId);
      return total + (category?.questions.length || 0);
    }, 0);

    if (totalAvailableQuestions < totalRounds) {
      throw new Error('Não há perguntas suficientes disponíveis para o número de rounds solicitado');
    }

    // Then, check if each category has enough questions
    for (const categoryId of selectedCategories) {
      const category = categories.find(cat => cat.id === categoryId);
      if (!category) continue;

      if (category.questions.length < questionsPerCategory) {
        throw new Error(`A categoria ${category.name} não tem perguntas suficientes`);
      }
    }

    // Select questions from each category
    selectedCategories.forEach(categoryId => {
      const category = categories.find(cat => cat.id === categoryId);
      if (!category) return;

      // Shuffle and select questions
      const selectedQuestions = [...category.questions]
        .sort(() => Math.random() - 0.5)
        .slice(0, questionsPerCategory);
      
      allQuestions.push(...selectedQuestions);
    });

    // Shuffle all questions to mix categories
    return allQuestions.sort(() => Math.random() - 0.5).slice(0, totalRounds);
  }

  getCategories(): Category[] {
    return categories;
  }
} 
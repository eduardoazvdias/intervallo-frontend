// Serviço específico para operações relacionadas ao quiz
import api from './api';

// Serviço de quiz para chamadas à API
export const quizService = {
  // Exemplo de método para buscar perguntas
  getQuestions: () => api.get<any[]>('quiz/questions'),
  
  // Exemplo de método para submeter respostas
  submitAnswer: (questionId: string, answer: string) => 
    api.post<any>('quiz/answers', { questionId, answer }),
};

export default quizService; 
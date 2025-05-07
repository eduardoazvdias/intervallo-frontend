interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const historyQuestions: Question[] = [
  {
    id: 1,
    question: "Em que ano o Brasil foi descoberto oficialmente?",
    options: ["1492", "1500", "1502", "1498"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Quem foi o primeiro presidente do Brasil?",
    options: ["Getúlio Vargas", "Deodoro da Fonseca", "Prudente de Morais", "Floriano Peixoto"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Em que ano ocorreu a Proclamação da República no Brasil?",
    options: ["1889", "1891", "1888", "1890"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Qual foi o último imperador do Brasil?",
    options: ["Dom João VI", "Dom Pedro I", "Dom Pedro II", "Dom João V"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Em que ano ocorreu a Revolução Industrial?",
    options: ["1760", "1789", "1800", "1820"],
    correctAnswer: 0
  }
]; 
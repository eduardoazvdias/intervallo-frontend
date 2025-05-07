interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const generalKnowledgeQuestions: Question[] = [
  {
    id: 1,
    question: "Qual é a capital do Brasil?",
    options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Quem pintou a Mona Lisa?",
    options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Terra", "Marte", "Júpiter", "Saturno"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Em que ano começou a Primeira Guerra Mundial?",
    options: ["1914", "1918", "1939", "1945"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Qual é o elemento químico com símbolo 'O'?",
    options: ["Ouro", "Oxigênio", "Ósmio", "Osmio"],
    correctAnswer: 1
  }
]; 
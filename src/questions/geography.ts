interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const geographyQuestions: Question[] = [
  {
    id: 1,
    question: "Qual é o maior oceano do mundo?",
    options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Qual é o ponto mais alto do Brasil?",
    options: ["Pico da Neblina", "Pico da Bandeira", "Pico do Paraná", "Pico das Agulhas Negras"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Qual é o maior deserto do mundo?",
    options: ["Saara", "Gobi", "Antártico", "Atacama"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Qual é o rio mais longo do mundo?",
    options: ["Amazonas", "Nilo", "Mississippi", "Yangtze"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Quantos continentes existem?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2
  }
]; 
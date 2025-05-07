interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const scienceQuestions: Question[] = [
  {
    id: 1,
    question: "Qual é a fórmula química da água?",
    options: ["CO2", "H2O", "O2", "H2SO4"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Qual é a unidade básica de medida de força no Sistema Internacional?",
    options: ["Watt", "Newton", "Joule", "Pascal"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Qual é o processo pelo qual as plantas produzem seu próprio alimento?",
    options: ["Respiração", "Fotossíntese", "Digestão", "Fermentação"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Qual é o elemento mais abundante no universo?",
    options: ["Oxigênio", "Carbono", "Hidrogênio", "Hélio"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Qual é a velocidade da luz no vácuo?",
    options: ["299.792 km/s", "199.792 km/s", "399.792 km/s", "499.792 km/s"],
    correctAnswer: 0
  }
]; 
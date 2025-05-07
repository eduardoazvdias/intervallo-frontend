interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const entertainmentQuestions: Question[] = [
  {
    id: 1,
    question: "Qual filme ganhou o Oscar de Melhor Filme em 2024?",
    options: ["Barbie", "Oppenheimer", "Killers of the Flower Moon", "Poor Things"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Quem é o criador da série 'Stranger Things'?",
    options: ["Steven Spielberg", "Matt Duffer", "J.J. Abrams", "Christopher Nolan"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Qual é o jogo mais vendido de todos os tempos?",
    options: ["Minecraft", "Tetris", "GTA V", "Wii Sports"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Qual cantor brasileiro é conhecido como 'Rei do Rock'?",
    options: ["Roberto Carlos", "Raul Seixas", "Cazuza", "Renato Russo"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Qual é o nome do primeiro filme da saga Star Wars?",
    options: ["O Império Contra-Ataca", "Uma Nova Esperança", "O Retorno de Jedi", "A Ameaça Fantasma"],
    correctAnswer: 1
  }
]; 
// Tipos relacionados ao jogo Intervallo

// Tipo para representar uma pergunta do quiz
export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  timeLimit?: number; // Tempo limite em segundos
};

// Tipo para representar um jogador
export type Player = {
  id: string;
  name: string;
  score: number;
  status: 'online' | 'offline';
  isHost?: boolean;
};

// Tipo para representar uma sala de jogo
export type Room = {
  id: string;
  name: string;
  players: Player[];
  status: 'waiting' | 'playing' | 'finished';
  currentQuestion?: Question;
  settings: GameSettings;
  createdAt: string;
};

// Configurações do jogo
export type GameSettings = {
  maxPlayers: number;
  timePerQuestion: number;
  totalQuestions: number;
  gameMode: 'standard' | 'lightning' | 'team';
};

// Estados possíveis do jogo
export type GameState = 
  | 'idle' 
  | 'joining' 
  | 'waiting' 
  | 'countdown' 
  | 'question' 
  | 'results' 
  | 'leaderboard' 
  | 'finished';

// Resposta do jogador a uma pergunta
export type PlayerAnswer = {
  playerId: string;
  questionId: string;
  answer: string;
  time: number; // Tempo gasto para responder em milissegundos
  isCorrect?: boolean;
};

// Tipo para representar a pontuação de um jogador
export type PlayerScore = {
  name: string;
  score: number;
  lastAnswerTime?: number;
  isReady?: boolean;
}; 
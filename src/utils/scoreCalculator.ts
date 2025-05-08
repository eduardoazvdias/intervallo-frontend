interface ScoreCalculationParams {
  answerTime: number; // em milissegundos
  isCorrect: boolean;
  maxTime: number; // tempo máximo em milissegundos (7000ms = 7s)
  maxScore: number; // pontuação base do round (1000)
  streakCount?: number; // número de respostas corretas seguidas
  isFirstToAnswer?: boolean; // se foi o primeiro a responder corretamente
  difficulty?: 'easy' | 'medium' | 'hard'; // dificuldade da pergunta
}

// Multiplicadores de dificuldade
const DIFFICULTY_MULTIPLIERS = {
  easy: 1,
  medium: 1.5,
  hard: 2
};

// Bônus por tempo
const TIME_BONUS = {
  perfect: 1.5, // 0-1s
  great: 1.3,   // 1-2s
  good: 1.1,    // 2-3s
  normal: 1     // 3-7s
};

export const calculateRoundScore = ({
  answerTime,
  isCorrect,
  maxTime,
  maxScore,
  streakCount = 0,
  isFirstToAnswer = false,
  difficulty = 'medium'
}: ScoreCalculationParams): number => {
  if (!isCorrect) {
    // Penalidade por resposta errada: -200 pontos
    // Penalidade adicional se tiver streak
    const streakPenalty = Math.min(streakCount * 50, 300);
    return -200 - streakPenalty;
  }

  // Pontuação base por tempo
  const timeScore = maxScore * (1 - (answerTime / maxTime));
  
  // Multiplicador por tempo de resposta
  let timeMultiplier = TIME_BONUS.normal;
  if (answerTime <= 1000) timeMultiplier = TIME_BONUS.perfect;
  else if (answerTime <= 2000) timeMultiplier = TIME_BONUS.great;
  else if (answerTime <= 3000) timeMultiplier = TIME_BONUS.good;

  // Multiplicador por dificuldade
  const difficultyMultiplier = DIFFICULTY_MULTIPLIERS[difficulty];

  // Bônus por streak (até 5 respostas corretas seguidas)
  const streakBonus = Math.min(streakCount * 0.2, 1);

  // Bônus por ser o primeiro a responder corretamente
  const firstAnswerBonus = isFirstToAnswer ? 0.3 : 0;

  // Cálculo final
  const finalScore = Math.round(
    timeScore * 
    timeMultiplier * 
    difficultyMultiplier * 
    (1 + streakBonus + firstAnswerBonus)
  );

  return finalScore;
};

// Função auxiliar para formatar a pontuação
export const formatScore = (score: number): string => {
  if (score > 0) {
    return `+${score}`;
  }
  return score.toString();
};

// Função para obter o texto do bônus
export const getBonusText = (score: number, params: ScoreCalculationParams): string => {
  const bonuses: string[] = [];

  if (params.isCorrect) {
    // Bônus por tempo
    if (params.answerTime <= 1000) bonuses.push('Perfect!');
    else if (params.answerTime <= 2000) bonuses.push('Great!');
    else if (params.answerTime <= 3000) bonuses.push('Good!');

    // Bônus por streak
    if (params.streakCount && params.streakCount > 1) {
      bonuses.push(`${params.streakCount}x Streak!`);
    }

    // Bônus por primeiro
    if (params.isFirstToAnswer) {
      bonuses.push('First!');
    }

    // Bônus por dificuldade
    if (params.difficulty === 'hard') {
      bonuses.push('Hard Question!');
    }
  } else {
    if (params.streakCount && params.streakCount > 1) {
      bonuses.push('Streak Lost!');
    }
  }

  return bonuses.join(' ');
}; 
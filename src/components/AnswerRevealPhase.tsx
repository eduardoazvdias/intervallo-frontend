import { Question } from '@/types/game';
import { Timer } from './Timer';
import { RoundRanking } from './RoundRanking';
import { PlayerScore } from '@/types/game';

interface AnswerRevealPhaseProps {
  question: Question;
  selectedAnswer: number | null;
  onNextRound: () => void;
  players: PlayerScore[];
  roundNumber: number;
}

export const AnswerRevealPhase = ({
  question,
  selectedAnswer,
  onNextRound,
  players,
  roundNumber,
}: AnswerRevealPhaseProps) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-2 text-white">
          Resposta Correta
        </h2>
      </div>
      
      <h2 className="mb-8 text-2xl font-bold text-center text-white">
        {question.question}
      </h2>
      
      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`p-4 text-lg font-medium text-left rounded-lg transition-colors ${
              index === question.correctAnswer
                ? 'bg-green-100 border-2 border-green-500 text-black'
                : selectedAnswer === index
                ? 'bg-red-100 border-2 border-red-500 text-black'
                : 'bg-white bg-opacity-50 text-black'
            }`}
          >
            {option}
          </div>
        ))}
      </div>

      <RoundRanking players={players} roundNumber={roundNumber} />

      <Timer
        onComplete={onNextRound}
        duration={3}
        variant="corner"
        text="Próximo round em..."
      />
    </div>
  );
}; 
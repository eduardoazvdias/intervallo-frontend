import { Question } from '@/types/game';
import { Timer } from './Timer';

interface QuestionPhaseProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
  onTimeUp: () => void;
  selectedAnswer: number | null;
  questionNumber: number;
  totalQuestions: number;
}

export const QuestionPhase = ({
  question,
  onAnswer,
  onTimeUp,
  selectedAnswer,
  questionNumber,
  totalQuestions,
}: QuestionPhaseProps) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-2 text-white">
          Pergunta {questionNumber} de {totalQuestions}
        </h2>
      </div>
      
      <h2 className="mb-8 text-2xl font-bold text-center text-white">
        {question.question}
      </h2>
      
      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            disabled={selectedAnswer !== null}
            className={`p-4 text-lg font-medium text-left rounded-lg transition-colors ${
              selectedAnswer === null
                ? 'bg-white hover:bg-blue-50 text-black'
                : index === question.correctAnswer
                ? 'bg-green-100 border-2 border-green-500 text-black'
                : selectedAnswer === index
                ? 'bg-red-100 border-2 border-red-500 text-black'
                : 'bg-white bg-opacity-50 text-black'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <Timer
        onComplete={onTimeUp}
        duration={7}
        variant="corner"
        text="Tempo restante:"
      />
    </div>
  );
}; 
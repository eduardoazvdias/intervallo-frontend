'use client';

import { useState, useEffect } from 'react';
import { Timer } from './Timer';
import { PlayerList } from './PlayerList';
import { GameOver } from './GameOver';
import { Question } from '@/questions';
import { QuestionService, Category } from '@/services/questionService';
import { QuestionPhase } from './QuestionPhase';
import { AnswerRevealPhase } from './AnswerRevealPhase';

interface GameProps {
  category: string;
}

interface PlayerScore {
  name: string;
  score: number;
  lastAnswerTime?: number;
  isReady?: boolean;
}

interface GameConfig {
  rounds: number;
  selectedCategories: string[];
}

export const Game = ({ category }: GameProps) => {
  const [gameState, setGameState] = useState<'lobby' | 'config' | 'waiting' | 'pre-question' | 'question' | 'answer' | 'game-over'>('lobby');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number>(0);
  const [gameConfig, setGameConfig] = useState<GameConfig>({
    rounds: 5,
    selectedCategories: [category]
  });
  const [questions, setQuestions] = useState<Question[]>([]);
  const questionService = QuestionService.getInstance();

  const [players, setPlayers] = useState<PlayerScore[]>([
    { name: 'Você', score: 0, isReady: true },
    { name: 'Jogador 2', score: 0, isReady: true },
    { name: 'Jogador 3', score: 0, isReady: true },
  ]);

  const categories = questionService.getCategories();

  useEffect(() => {
    if (gameState === 'question') {
      const gameQuestions = questionService.getQuestionsForGame(
        gameConfig.selectedCategories,
        gameConfig.rounds
      );
      setQuestions(gameQuestions);
    }
  }, [gameState, gameConfig.selectedCategories, gameConfig.rounds]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleStartGame = () => {
    setGameState('pre-question');
  };

  const handleOpenConfig = () => {
    setGameState('config');
  };

  const handleSaveConfig = () => {
    setGameState('lobby');
  };

  const handleCategoryToggle = (categoryId: string) => {
    setGameConfig(prev => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(categoryId)
        ? prev.selectedCategories.filter(id => id !== categoryId)
        : [...prev.selectedCategories, categoryId]
    }));
  };

  const handleRoundsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameConfig(prev => ({
      ...prev,
      rounds: parseInt(e.target.value)
    }));
  };

  const handlePreQuestionComplete = () => {
    setGameState('question');
    setStartTime(Date.now());
  };

  const handleAnswerClick = (selectedOption: number) => {
    if (selectedAnswer !== null || !currentQuestion) return;
    
    const answerTime = Date.now() - startTime;
    setSelectedAnswer(selectedOption);
    
    // Simulate other players answering
    const otherPlayers = players.slice(1).map(player => ({
      ...player,
      lastAnswerTime: Math.random() * 7000,
      score: player.score + (Math.random() > 0.5 ? 1 : 0)
    }));

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    const updatedPlayers = [
      {
        name: 'Você',
        score: players[0].score + (isCorrect ? 1 : 0),
        lastAnswerTime: answerTime
      },
      ...otherPlayers
    ];

    setPlayers(updatedPlayers);
    setGameState('answer');
  };

  const handleQuestionTimeUp = () => {
    if (selectedAnswer === null) {
      setGameState('answer');
    }
  };

  const handleNextRound = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setGameState('question');
      setStartTime(Date.now());
    } else {
      setGameState('game-over');
    }
  };

  const handlePlayAgain = () => {
    setGameState('lobby');
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setPlayers(players.map(player => ({ ...player, score: 0, lastAnswerTime: undefined })));
  };

  const renderGameContent = () => {
    switch (gameState) {
      case 'lobby':
        return (
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <button
              onClick={handleStartGame}
              className="px-8 py-4 text-xl font-bold text-blue-900 bg-white rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Iniciar
            </button>
            <button
              onClick={handleOpenConfig}
              className="px-8 py-4 text-xl font-bold text-blue-900 bg-white rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Configurações
            </button>
          </div>
        );

      case 'config':
        return (
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Número de Rounds</h2>
              <input
                type="range"
                min="1"
                max="20"
                value={gameConfig.rounds}
                onChange={handleRoundsChange}
                className="w-full"
              />
              <div className="text-white text-center mt-2">{gameConfig.rounds} rounds</div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Categorias</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryToggle(category.id)}
                    className={`p-4 rounded-lg transition-colors ${
                      gameConfig.selectedCategories.includes(category.id)
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-blue-900 hover:bg-blue-50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={handleSaveConfig}
                className="px-8 py-4 text-xl font-bold text-blue-900 bg-white rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Salvar e Fechar
              </button>
            </div>
          </div>
        );

      case 'waiting':
        return (
          <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-blue-900 to-blue-800">
            <button
              onClick={handleStartGame}
              className="px-8 py-4 text-xl font-bold text-blue-900 bg-white rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Iniciar Jogo
            </button>
          </div>
        );

      case 'pre-question':
        return (
          <div className="flex items-center justify-center h-full">
            <Timer
              onComplete={handlePreQuestionComplete}
              duration={3}
              variant="centered"
              text="O jogo começa em..."
              className="bg-gradient-to-r from-blue-600 to-blue-800"
            />
          </div>
        );

      case 'question':
        if (!currentQuestion) return null;
        return (
          <QuestionPhase
            question={currentQuestion}
            onAnswer={handleAnswerClick}
            onTimeUp={handleQuestionTimeUp}
            selectedAnswer={selectedAnswer}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
        );

      case 'answer':
        if (!currentQuestion) return null;
        return (
          <AnswerRevealPhase
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onNextRound={handleNextRound}
            players={players}
            roundNumber={currentQuestionIndex + 1}
          />
        );

      case 'game-over':
        return <GameOver players={players} onPlayAgain={handlePlayAgain} />;
    }
  };

  return (
    <div className="flex h-[calc(100vh-200px)]">
      <PlayerList players={players} />
      <div className="w-px bg-gray-300" />
      <div className="flex-1 relative bg-gradient-to-b from-blue-900 to-blue-800">
        {renderGameContent()}
      </div>
    </div>
  );
}; 
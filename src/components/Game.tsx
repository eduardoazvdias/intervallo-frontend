'use client';

import { useState, useEffect } from 'react';
import { Timer } from './Timer';
import { PlayerList } from './PlayerList';
import { GameOver } from './GameOver';
import { Question } from '@/questions';
import { QuestionService, Category } from '@/services/questionService';

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
  const [gameState, setGameState] = useState<'lobby' | 'config' | 'waiting' | 'round-start' | 'answering' | 'showing-answer' | 'game-over'>('lobby');
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
    if (gameState === 'round-start') {
      const gameQuestions = questionService.getQuestionsForGame(
        gameConfig.selectedCategories,
        gameConfig.rounds
      );
      setQuestions(gameQuestions);
    }
  }, [gameState, gameConfig.selectedCategories, gameConfig.rounds]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleStartGame = () => {
    setGameState('round-start');
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

  const handleRoundTimerComplete = () => {
    setGameState('answering');
    setStartTime(Date.now());
  };

  const handleAnswerTimerComplete = () => {
    if (selectedAnswer === null) {
      // Time's up - show correct answer
      setGameState('showing-answer');
      // Simulate other players answering
      const otherPlayers = players.slice(1).map(player => ({
        ...player,
        lastAnswerTime: Math.random() * 7000,
        score: player.score + (Math.random() > 0.5 ? 1 : 0)
      }));

      setPlayers([
        {
          name: 'Você',
          score: players[0].score,
          lastAnswerTime: 7000
        },
        ...otherPlayers
      ]);

      // Wait 2 seconds before next question
      setTimeout(handleNextQuestion, 2000);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setGameState('round-start');
    } else {
      setGameState('game-over');
    }
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
    setGameState('showing-answer');

    // Wait 2 seconds before next question
    setTimeout(handleNextQuestion, 2000);
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

      case 'round-start':
        return (
          <div className="flex items-center justify-center h-full bg-gradient-to-b from-blue-900 to-blue-800">
            <Timer onComplete={handleRoundTimerComplete} duration={3} variant="centered" />
          </div>
        );

      case 'answering':
      case 'showing-answer':
        if (!currentQuestion) return null;
        return (
          <div className="max-w-2xl mx-auto p-6">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold mb-2 text-white">
                Pergunta {currentQuestionIndex + 1} de {questions.length}
              </h2>
            </div>
            
            <h2 className="mb-8 text-2xl font-bold text-center text-white">
              {currentQuestion.question}
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                  className={`p-4 text-lg font-medium text-left rounded-lg transition-colors ${
                    selectedAnswer === null
                      ? 'bg-white hover:bg-blue-50 text-black'
                      : index === currentQuestion.correctAnswer
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

            {gameState === 'showing-answer' && (
              <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-black">Resultados</h3>
                <div className="space-y-2">
                  {players.map((player, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-black">{player.name}</span>
                      <div className="flex items-center gap-4">
                        {player.lastAnswerTime && (
                          <span className="text-sm text-gray-600">
                            {player.lastAnswerTime < 1000
                              ? `${player.lastAnswerTime}ms`
                              : `${(player.lastAnswerTime / 1000).toFixed(1)}s`}
                          </span>
                        )}
                        <span className="font-bold text-blue-600">{player.score} pontos</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
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
        {gameState === 'answering' && (
          <Timer onComplete={handleAnswerTimerComplete} duration={7} variant="corner" />
        )}
        {renderGameContent()}
      </div>
    </div>
  );
}; 
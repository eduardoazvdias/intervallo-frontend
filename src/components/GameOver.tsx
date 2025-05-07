'use client';

interface PlayerScore {
  name: string;
  score: number;
}

interface GameOverProps {
  players: PlayerScore[];
  onPlayAgain: () => void;
}

export const GameOver = ({ players, onPlayAgain }: GameOverProps) => {
  // Sort players by score in descending order
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const topThree = sortedPlayers.slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-blue-900 to-blue-800 text-white p-8">
      <h2 className="text-4xl font-bold mb-8">Fim de Jogo!</h2>
      
      <div className="w-full max-w-md space-y-6">
        {topThree.map((player, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-lg ${
              index === 0
                ? 'bg-yellow-500 text-blue-900'
                : index === 1
                ? 'bg-gray-300 text-blue-900'
                : 'bg-amber-700 text-white'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold">#{index + 1}</span>
              <span className="text-xl font-semibold">{player.name}</span>
            </div>
            <span className="text-2xl font-bold">{player.score} pts</span>
          </div>
        ))}
      </div>

      <button
        onClick={onPlayAgain}
        className="mt-8 px-8 py-4 bg-white text-blue-900 rounded-lg text-xl font-bold hover:bg-blue-50 transition-colors"
      >
        Jogar Novamente
      </button>
    </div>
  );
}; 
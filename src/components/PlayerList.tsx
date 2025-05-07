'use client';

interface PlayerScore {
  name: string;
  score: number;
  isReady?: boolean;
  lastAnswerTime?: number;
}

interface PlayerListProps {
  players: PlayerScore[];
}

export const PlayerList = ({ players }: PlayerListProps) => {
  return (
    <div className="w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-4 h-full">
      <h3 className="text-xl font-bold mb-6 text-center">Jogadores</h3>
      <div className="space-y-3">
        {players.map((player, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  player.isReady ? 'bg-green-400' : 'bg-gray-400'
                }`}
              />
              <span className="font-medium">{player.name}</span>
            </div>
            <div className="flex items-center gap-2">
              {player.lastAnswerTime && (
                <span className="text-sm text-blue-200">
                  {player.lastAnswerTime < 1000
                    ? `${player.lastAnswerTime}ms`
                    : `${(player.lastAnswerTime / 1000).toFixed(1)}s`}
                </span>
              )}
              <span className="font-bold text-yellow-300">{player.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 
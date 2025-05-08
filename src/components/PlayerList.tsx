'use client';

import { PlayerScore } from '@/types/game';

interface PlayerListProps {
  players: PlayerScore[];
}

export const PlayerList = ({ players }: PlayerListProps) => {
  // Sort players by total score in descending order
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  const getPositionColor = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-yellow-500'; // Gold
      case 1:
        return 'bg-gray-300'; // Silver
      case 2:
        return 'bg-amber-700'; // Bronze
      default:
        return 'bg-gray-400'; // Gray for 4th place and below
    }
  };

  return (
    <div className="w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-4 h-full">
      <h3 className="text-xl font-bold mb-6 text-center text-white">Placar Total</h3>
      <div className="space-y-3">
        {sortedPlayers.map((player, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${getPositionColor(index)}`}
              />
              <span className="font-medium text-black">{player.name}</span>
            </div>
            <span className="font-bold text-blue-600">{player.score} pontos</span>
          </div>
        ))}
      </div>
    </div>
  );
}; 
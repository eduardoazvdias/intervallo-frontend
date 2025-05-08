import { PlayerScore } from '@/types/game';

interface RoundRankingProps {
  players: PlayerScore[];
  roundNumber: number;
}

export const RoundRanking = ({ players, roundNumber }: RoundRankingProps) => {
  // Sort players by answer time (faster first) and then by score
  const sortedPlayers = [...players]
    .filter(player => player.lastAnswerTime !== undefined)
    .sort((a, b) => {
      if (a.lastAnswerTime === undefined) return 1;
      if (b.lastAnswerTime === undefined) return -1;
      return a.lastAnswerTime - b.lastAnswerTime;
    });

  return (
    <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-black">Ranking do Round {roundNumber}</h3>
      <div className="space-y-2">
        {sortedPlayers.map((player, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                index === 0 ? 'bg-yellow-400' :
                index === 1 ? 'bg-gray-300' :
                index === 2 ? 'bg-amber-700' :
                'bg-gray-400'
              }`}>
                <span className="text-sm font-bold text-white">{index + 1}</span>
              </div>
              <span className="text-black">{player.name}</span>
            </div>
            <div className="flex items-center gap-4">
              {player.lastAnswerTime && (
                <span className="text-sm text-gray-600">
                  {player.lastAnswerTime < 1000
                    ? `${player.lastAnswerTime}ms`
                    : `${(player.lastAnswerTime / 1000).toFixed(1)}s`}
                </span>
              )}
              <span className="font-bold text-blue-600">
                {player.lastAnswerTime !== undefined ? '+1 ponto' : '0 pontos'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 
import { PlayerScore } from '@/types/game';
import { formatScore, getBonusText } from '@/utils/scoreCalculator';

interface RoundRankingProps {
  players: PlayerScore[];
  roundNumber: number;
}

export const RoundRanking = ({ players, roundNumber }: RoundRankingProps) => {
  // Sort players by round score (higher first) and then by time
  const sortedPlayers = [...players]
    .filter(player => player.lastAnswerTime !== undefined)
    .sort((a, b) => {
      if (a.roundScore === undefined) return 1;
      if (b.roundScore === undefined) return -1;
      if (b.roundScore !== a.roundScore) return b.roundScore - a.roundScore;
      return (a.lastAnswerTime || 0) - (b.lastAnswerTime || 0);
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
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-4">
                {player.lastAnswerTime && (
                  <span className="text-sm text-gray-600">
                    {player.lastAnswerTime < 1000
                      ? `${player.lastAnswerTime}ms`
                      : `${(player.lastAnswerTime / 1000).toFixed(1)}s`}
                  </span>
                )}
                <span className={`font-bold ${
                  player.roundScore && player.roundScore > 0
                    ? 'text-green-600'
                    : player.roundScore && player.roundScore < 0
                    ? 'text-red-600'
                    : 'text-blue-600'
                }`}>
                  {player.roundScore !== undefined ? formatScore(player.roundScore) : '0'} pontos
                </span>
              </div>
              {player.roundScore !== undefined && player.lastAnswerTime !== undefined && (
                <span className="text-sm text-gray-500">
                  {getBonusText(player.roundScore, {
                    answerTime: player.lastAnswerTime,
                    isCorrect: player.roundScore > 0,
                    maxTime: 7000,
                    maxScore: 1000,
                    streakCount: player.streakCount,
                    isFirstToAnswer: index === 0 && player.roundScore > 0,
                    difficulty: player.difficulty
                  })}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 
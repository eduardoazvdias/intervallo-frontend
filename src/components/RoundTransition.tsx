import { useEffect, useState } from 'react';

interface RoundTransitionProps {
  roundNumber: number;
  onComplete: () => void;
}

export const RoundTransition = ({ roundNumber, onComplete }: RoundTransitionProps) => {
  const [countdown, setCountdown] = useState(3);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsExiting(true);
      const exitTimer = setTimeout(onComplete, 500);
      return () => clearTimeout(exitTimer);
    }
  }, [countdown, onComplete]);

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center transition-all duration-500 ${
      isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    }`}>
      <div className="text-4xl font-bold text-white mb-4">
        Round {roundNumber}
      </div>
      <div className="text-6xl font-bold text-white animate-pulse">
        {countdown}
      </div>
      <div className="text-xl text-white mt-4">
        Preparando próxima pergunta...
      </div>
    </div>
  );
}; 
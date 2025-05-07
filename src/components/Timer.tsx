'use client';

import { useState, useEffect } from 'react';

interface TimerProps {
  onComplete: () => void;
  duration?: number;
  variant?: 'centered' | 'corner';
}

export const Timer = ({ onComplete, duration = 3, variant = 'centered' }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  if (variant === 'corner') {
    return (
      <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md">
        <span className="text-2xl font-bold text-blue-600">{timeLeft}</span>
      </div>
    );
  }

  return (
    <div className="bg-white px-8 py-6 rounded-full shadow-lg">
      <span className="text-4xl font-bold text-blue-600">{timeLeft}</span>
    </div>
  );
}; 
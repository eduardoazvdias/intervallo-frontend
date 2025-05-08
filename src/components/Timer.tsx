'use client';

import { useState, useEffect } from 'react';

interface TimerProps {
  onComplete: () => void;
  duration?: number;
  variant?: 'centered' | 'corner';
  text?: string;
  className?: string;
}

export const Timer = ({ onComplete, duration = 3, variant = 'centered', text, className = '' }: TimerProps) => {
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

  const displayText = text ? `${text} ${timeLeft}` : timeLeft;

  if (variant === 'corner') {
    return (
      <div className={`absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md ${className}`}>
        <span className="text-2xl font-bold text-blue-600">{displayText}</span>
      </div>
    );
  }

  return (
    <div className={`bg-white px-8 py-6 rounded-full shadow-lg ${className}`}>
      <span className="text-4xl font-bold text-blue-600">{displayText}</span>
    </div>
  );
}; 
import { useEffect, useState } from 'react';

interface GameTransitionProps {
  isVisible: boolean;
  onComplete: () => void;
  children: React.ReactNode;
}

export const GameTransition = ({ isVisible, onComplete, children }: GameTransitionProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setIsExiting(false);
        onComplete();
      }, 500); // Duração da animação
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  return (
    <div className={`w-full h-full flex items-center justify-center transition-all duration-500 ${
      isVisible 
        ? 'opacity-100 scale-100' 
        : isExiting 
          ? 'opacity-0 scale-95' 
          : 'opacity-0 scale-95'
    }`}>
      {children}
    </div>
  );
}; 
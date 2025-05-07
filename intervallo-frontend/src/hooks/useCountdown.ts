import { useState, useEffect, useRef } from 'react';

type CountdownOptions = {
  initialSeconds: number;
  onComplete?: () => void;
  interval?: number;
  autoStart?: boolean;
};

export function useCountdown({
  initialSeconds,
  onComplete,
  interval = 1000,
  autoStart = true,
}: CountdownOptions) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(autoStart);
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);
  
  // Atualizar ref quando o callback mudar
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);
  
  // Iniciar contagem
  const start = () => {
    if (seconds > 0) {
      setIsActive(true);
      setIsComplete(false);
    }
  };
  
  // Pausar contagem
  const pause = () => {
    setIsActive(false);
  };
  
  // Reiniciar contagem
  const reset = (newSeconds = initialSeconds) => {
    setSeconds(newSeconds);
    setIsComplete(false);
  };
  
  // Efeito de contagem regressiva
  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;
    
    if (isActive && seconds > 0) {
      timerId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(timerId);
            setIsActive(false);
            setIsComplete(true);
            onCompleteRef.current?.();
            return 0;
          }
          return prevSeconds - 1;
        });
      }, interval);
    }
    
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [isActive, seconds, interval]);
  
  return {
    seconds,
    isActive,
    isComplete,
    start,
    pause,
    reset,
    // Funções formatadoras úteis
    formattedTime: {
      minutes: Math.floor(seconds / 60),
      seconds: seconds % 60,
      formatted: `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`,
    },
  };
} 
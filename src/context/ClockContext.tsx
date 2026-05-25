import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface ClockContextType {
  time: Date;
  bpm: number;
  setSpeed: (interval: number) => void;
  setBpm: (bpm: number) => void;
}

export const ClockContext = createContext<ClockContextType | null>(null);

interface ClockProviderProps {
  children: ReactNode;
  initialInterval?: number;
}

export const ClockProvider = ({ children, initialInterval = 1000 }: ClockProviderProps) => {
  const [time, setTime] = useState(new Date());
  const [intervalMs, setIntervalMs] = useState(initialInterval);

  const bpm = Math.round(60000 / intervalMs);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setTime(new Date());
    }, intervalMs);

    return () => window.clearInterval(timerId);
  }, [intervalMs]);

  const setBpm = (newBpm: number) => {
    // prevent invalid values
    const clamped = Math.max(1, newBpm);
    const newInterval = Math.round(60000 / clamped);
    setIntervalMs(newInterval);
  };

  return (
    <ClockContext.Provider value={{ time, bpm, setSpeed: setIntervalMs, setBpm }}>
      {children}
    </ClockContext.Provider>
  );
};
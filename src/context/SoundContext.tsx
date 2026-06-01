import { createContext, useRef, useEffect, useContext } from "react";
import { useState, type ReactNode } from "react";
import { ClockContext } from "./ClockContext";

interface SoundContextType {
  volume: number;
  setVolume: (volume: number) => void;
  mute: boolean;
  setMute: (mute: boolean) => void;
  fill: boolean;
  setFill: (fill: boolean) => void;
  playAudio: () => void;
}

export const SoundContext = createContext<SoundContextType | null>(null);

interface SoundProviderProps {
  children: ReactNode;
}

export const SoundProvider = ({ children }: SoundProviderProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const clockContext = useContext(ClockContext);
  const [volume, setVolume] = useState(50);
  const [mute, setMute] = useState(false);
  const [fill, setFill] = useState(false);

  // initialize audio element using Vite asset URL resolution
  useEffect(() => {
    const audioUrl = new URL("../audio/clave_lo.wav", import.meta.url).href;
    const audio = new Audio(audioUrl);
    audio.preload = "auto";
    audioRef.current = audio;
  }, []);

  // sync audio element volume and mute state
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = mute;
    audioRef.current.volume = mute ? 0 : Math.max(0, Math.min(1, volume / 100));
  }, [mute, volume]);

  // play audio on clock tick when playSate == true
  useEffect(() => {
    if (clockContext?.playState && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.error("Failed to play audio:", err);
      });
    }
  }, [clockContext?.time, clockContext?.playState]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.error("Failed to play audio:", err);
      });
    }
  };

  return (
    <SoundContext.Provider 
      value={{ 
        volume,
        setVolume,
        mute,
        setMute,
        fill,
        setFill,
        playAudio 
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};



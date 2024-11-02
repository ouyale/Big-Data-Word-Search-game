import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { generateGrid, GridPosition } from '../utils/gridGenerator';
import { TOPICS, TOPIC_WORDS, WORD_DEFINITIONS } from '../constants';
import confetti from 'canvas-confetti';

type TopicKey = keyof typeof TOPICS;

interface GameContextType {
  grid: string[][];
  words: string[];
  foundWords: string[];
  timeRemaining: number;
  gameOver: boolean;
  positions: Record<string, GridPosition>;
  checkWord: (word: string) => void;
  definitions: Record<string, string>;
  wordCount: number;
  setWordCount: (count: number) => void;
  timerEnabled: boolean;
  setTimerEnabled: (enabled: boolean) => void;
  regenerateGame: () => void;
  victory: boolean;
  currentTopic: TopicKey;
  setCurrentTopic: (topic: TopicKey) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

interface GameProviderProps {
  children: React.ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [wordCount, setWordCount] = useState(10);
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(180);
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);
  const [gameKey, setGameKey] = useState(0);
  const [currentTopic, setCurrentTopic] = useState<TopicKey>('data-science');

  // Select random words based on wordCount and topic
  const words = useMemo(() => {
    const topicWords = TOPIC_WORDS[currentTopic];
    const shuffled = [...topicWords].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, wordCount);
  }, [wordCount, gameKey, currentTopic]);

  // Generate grid only once using useMemo
  const { grid, positions } = useMemo(() => generateGrid(words), [words]);

  useEffect(() => {
    if (!timerEnabled) return;
    
    if (timeRemaining <= 0) {
      setGameOver(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, timerEnabled]);

  const regenerateGame = () => {
    setGameKey(prev => prev + 1);
    setFoundWords([]);
    setTimeRemaining(180);
    setGameOver(false);
    setVictory(false);
  };

  const checkWord = (selectedWord: string) => {
    if (gameOver) return;

    const word = selectedWord.toUpperCase();
    if (words.includes(word) && !foundWords.includes(word)) {
      setFoundWords(prev => {
        const newFoundWords = [...prev, word];
        
        // Check for victory
        if (newFoundWords.length === words.length) {
          setVictory(true);
          setGameOver(true);
          // Trigger celebration
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
        
        return newFoundWords;
      });
    }
  };

  const value = {
    grid,
    words,
    foundWords,
    timeRemaining,
    gameOver,
    positions,
    checkWord,
    definitions: WORD_DEFINITIONS,
    wordCount,
    setWordCount,
    timerEnabled,
    setTimerEnabled,
    regenerateGame,
    victory,
    currentTopic,
    setCurrentTopic
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
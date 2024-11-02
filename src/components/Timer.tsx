import React from 'react';
import { useGameContext } from '../context/GameContext';

const GameTimer: React.FC = () => {
  const { timeRemaining } = useGameContext();
  
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <span className="font-mono text-lg">
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </span>
  );
};

export default GameTimer;
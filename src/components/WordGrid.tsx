import React, { useState, useRef } from 'react';
import { useGameContext } from '../context/GameContext';

interface Position {
  row: number;
  col: number;
}

const getSelectedCells = (start: Position, end: Position): Position[] => {
  const cells: Position[] = [];
  
  // Calculate the direction vector
  const dx = end.row - start.row;
  const dy = end.col - start.col;
  
  // Determine if movement is diagonal, horizontal, or vertical
  let steps = Math.max(Math.abs(dx), Math.abs(dy));
  if (steps === 0) return [start];
  
  const xStep = dx / steps;
  const yStep = dy / steps;
  
  for (let i = 0; i <= steps; i++) {
    cells.push({
      row: Math.round(start.row + xStep * i),
      col: Math.round(start.col + yStep * i)
    });
  }
  
  return cells;
};

const getSelectedWord = (grid: string[][], cells: Position[]): string => {
  return cells.map(cell => grid[cell.row][cell.col]).join('');
};

const WordGrid: React.FC = () => {
  const { grid, checkWord, gameOver, foundWords, positions } = useGameContext();
  const [selection, setSelection] = useState<{ start: Position | null; current: Position | null }>({ start: null, current: null });
  const [selectedCells, setSelectedCells] = useState<Position[]>([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Get all cells that are part of found words
  const getFoundWordCells = (): string[] => {
    const cells = new Set<string>();
    foundWords.forEach(word => {
      const pos = positions[word];
      if (pos) {
        const start = { row: pos.row, col: pos.col };
        let end: Position;
        
        switch (pos.direction) {
          case 'horizontal':
            end = { row: pos.row, col: pos.col + word.length - 1 };
            break;
          case 'vertical':
            end = { row: pos.row + word.length - 1, col: pos.col };
            break;
          case 'diagonal':
            end = { row: pos.row + word.length - 1, col: pos.col + word.length - 1 };
            break;
          case 'reverse-horizontal':
            end = { row: pos.row, col: pos.col - word.length + 1 };
            break;
          case 'reverse-vertical':
            end = { row: pos.row - word.length + 1, col: pos.col };
            break;
          case 'reverse-diagonal':
            end = { row: pos.row - word.length + 1, col: pos.col - word.length + 1 };
            break;
        }
        
        const wordCells = getSelectedCells(start, end);
        wordCells.forEach(cell => cells.add(`${cell.row}-${cell.col}`));
      }
    });
    return Array.from(cells);
  };

  const foundCells = getFoundWordCells();

  const handleMouseDown = (row: number, col: number) => {
    if (gameOver) return;
    setIsSelecting(true);
    setSelection({ start: { row, col }, current: { row, col } });
    setSelectedCells([{ row, col }]);
  };

  const handleMouseMove = (row: number, col: number) => {
    if (!isSelecting || !selection.start || gameOver) return;
    
    const current = { row, col };
    setSelection({ ...selection, current });
    
    const cells = getSelectedCells(selection.start, current);
    setSelectedCells(cells);
  };

  const handleMouseUp = () => {
    if (!isSelecting || !selection.start || !selection.current || gameOver) return;
    
    const word = getSelectedWord(grid, selectedCells);
    checkWord(word);
    
    setIsSelecting(false);
    setSelection({ start: null, current: null });
    setSelectedCells([]);
  };

  return (
    <div 
      className="grid grid-cols-10 gap-1 bg-indigo-50 p-4 rounded-xl"
      ref={gridRef}
      onMouseLeave={() => {
        if (isSelecting) {
          setIsSelecting(false);
          setSelection({ start: null, current: null });
          setSelectedCells([]);
        }
      }}
    >
      {grid.map((row, i) => (
        row.map((letter, j) => {
          const isSelected = selectedCells.some(cell => cell.row === i && cell.col === j);
          const isFound = foundCells.includes(`${i}-${j}`);
          
          return (
            <div
              key={`${i}-${j}`}
              className={`
                w-10 h-10 flex items-center justify-center
                text-lg font-semibold rounded-lg
                cursor-pointer select-none
                transition-all duration-200
                ${isSelected 
                  ? 'bg-indigo-600 text-white' 
                  : isFound
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-800 hover:bg-indigo-100'}
                ${gameOver ? 'opacity-50' : ''}
              `}
              onMouseDown={() => handleMouseDown(i, j)}
              onMouseMove={() => handleMouseMove(i, j)}
              onMouseUp={handleMouseUp}
            >
              {letter}
            </div>
          );
        })
      ))}
    </div>
  );
};

export default WordGrid;
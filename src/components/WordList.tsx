import React from 'react';
import { useGameContext } from '../context/GameContext';
import { Check } from 'lucide-react';

const WordList: React.FC = () => {
  const { words, foundWords, definitions } = useGameContext();

  return (
    <div className="bg-white rounded-xl p-4">
      <h2 className="text-xl font-semibold mb-4">Words to Find</h2>
      <div className="space-y-2">
        {words.map(word => {
          const found = foundWords.includes(word);
          return (
            <div
              key={word}
              className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
                found ? 'bg-green-50' : 'bg-gray-50'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                found ? 'bg-green-500' : 'bg-gray-200'
              }`}>
                {found && <Check className="w-4 h-4 text-white" />}
              </div>
              <span className={`font-medium ${found ? 'text-green-700' : 'text-gray-700'}`}>
                {word}
              </span>
              {found && (
                <div className="ml-2 text-sm text-gray-600">
                  {definitions[word]}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WordList;
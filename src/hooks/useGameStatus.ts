import { useState, useEffect, useCallback } from 'react';
import { ROWPOINTS } from '../types';

export const useGameStatus = (rowsCleared: number) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(1);

  const calcScore = useCallback(() => {
    if (rowsCleared > 0) {
      setScore(prev => prev + ROWPOINTS[rowsCleared - 1] * level);
      setRows(prev => prev + rowsCleared);
    }
  }, [level, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  useEffect(() => {
    if (rows > level * 10) {
      setLevel(prev => prev + 1);
    }
  }, [level, rows]);

  return [score, setScore, rows, setRows, level, setLevel] as const;
}; 
import { STAGE_WIDTH, STAGE_HEIGHT } from './types';
import { PLAYER } from './types';

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill(0));

export const checkCollision = (
  player: PLAYER,
  stage: (string | number)[][],
  { x: moveX, y: moveY }: { x: number; y: number }
) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check that we're on an actual Tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check that our move is inside the game areas height (y)
          // We shouldn't go through the bottom of the play area
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that our move is inside the game areas width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check that the cell we're moving to isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

export const rotate = (matrix: (string | number)[][]) => {
  // Make the rows to become cols (transpose)
  const mtrx = matrix.map((_, i) => matrix.map(column => column[i]));
  // Reverse each row to get a rotated matrix
  return mtrx.map(row => row.reverse());
};

export const clearRows = (stage: (string | number)[][]): [number, (string | number)[][]] => {
  let rowsCleared = 0;
  
  const newStage = stage.reduce((acc, row) => {
    // If we don't find a 0 it means that the row is full and should be cleared
    if (row.findIndex(cell => cell === 0) === -1) {
      rowsCleared += 1;
      // Create an empty row at the beginning of the array to push the Tetris down
      acc.unshift(new Array(stage[0].length).fill(0));
      return acc;
    }
    acc.push(row);
    return acc;
  }, [] as (string | number)[][]);

  return [rowsCleared, newStage];
}; 
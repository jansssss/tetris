export type TETROMINO = 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';

export type CELL = 0 | TETROMINO;

export type STAGE = CELL[][];

export type PLAYER = {
  pos: {
    x: number;
    y: number;
  };
  tetromino: (string | 0)[][];
  collided: boolean;
};

export type GAME_STATS = {
  score: number;
  rows: number;
  level: number;
};

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
export const ROWPOINTS = [40, 100, 300, 1200]; 
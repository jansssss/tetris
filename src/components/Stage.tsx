import React from 'react';
import { StyledStage } from './styles/StyledTetris';
import Cell from './Cell';
import { TETROMINO } from '../types';

type Props = {
  stage: (TETROMINO | 0)[][];
};

const Stage: React.FC<Props> = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell} />))}
  </StyledStage>
);

export default Stage; 
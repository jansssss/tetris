import React from 'react';
import { StyledCell } from './styles/StyledTetris';
import { TETROMINOS } from '../tetrominos';

type Props = {
  type: keyof typeof TETROMINOS;
};

const Cell: React.FC<Props> = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

export default React.memo(Cell); 
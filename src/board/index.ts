import { Box } from "../types/types.js";

export const hasMine = (): boolean => {
  const probability = 0.15;

  const randomNumber = Math.random() <= probability;

  if (randomNumber === true) {
    return true;
  }

  return false;
};

export const createBoard = (boardSize: number): Box[][] => {
  const completedBoard: Box[][] = [];
  const row: Box[] = [];

  for (let rowsTotal = 0; rowsTotal < boardSize; rowsTotal++) {
    completedBoard.push(row);

    row.push({
      hasMine: hasMine(),
      minesAroundTotal: 0,
    });
  }

  return completedBoard;
};

import { Box } from "../types/types";
import { Board } from "./types";

export const hasMine = (): boolean => {
  const probability = 0.4;

  const randomNumber = Math.random() <= probability;

  if (randomNumber) {
    return true;
  }

  return false;
};

export const createBoard = (boardSize: number): Board => {
  const board: Board = [];

  for (let rowPosition = 0; rowPosition < boardSize; rowPosition++) {
    const row: Box[] = [];
    board.push(row);

    for (let boxPosition = 0; boxPosition < boardSize; boxPosition++) {
      row.push({
        hasMine: hasMine(),
        minesAroundTotal: 0,
      });
    }
  }

  return board;
};

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

const calculateMinesAround = (board: Board): Board => {
  if (board.at(0)) {
    if (board.at(0)?.at(0)?.hasMine) {
      board.at(0)!.at(1)!.minesAroundTotal =
        board.at(0)!.at(1)!.minesAroundTotal + 1;
      board.at(1)!.at(0)!.minesAroundTotal =
        board.at(1)!.at(0)!.minesAroundTotal + 1;
      board.at(1)!.at(1)!.minesAroundTotal =
        board.at(1)!.at(1)!.minesAroundTotal + 1;
    }

    if (board.at(0)?.at(-1)?.hasMine) {
      board.at(0)!.at(-2)!.minesAroundTotal =
        board.at(0)!.at(-2)!.minesAroundTotal + 1;
      board.at(1)!.at(-2)!.minesAroundTotal =
        board.at(1)!.at(-2)!.minesAroundTotal + 1;
      board.at(1)!.at(-1)!.minesAroundTotal =
        board.at(1)!.at(-1)!.minesAroundTotal + 1;
    }

    for (let boxPosition = 1; boxPosition < board.length - 1; boxPosition++) {
      if (board.at(0)?.at(boxPosition)?.hasMine) {
        board.at(0)!.at(boxPosition + 1)!.minesAroundTotal =
          board.at(0)!.at(boxPosition + 1)!.minesAroundTotal + 1;
        board.at(0)!.at(boxPosition - 1)!.minesAroundTotal =
          board.at(0)!.at(boxPosition - 1)!.minesAroundTotal + 1;
        board.at(1)!.at(boxPosition + 1)!.minesAroundTotal =
          board.at(1)!.at(boxPosition + 1)!.minesAroundTotal + 1;
        board.at(1)!.at(boxPosition - 1)!.minesAroundTotal =
          board.at(1)!.at(boxPosition - 1)!.minesAroundTotal + 1;
        board.at(1)!.at(boxPosition)!.minesAroundTotal =
          board.at(1)!.at(boxPosition)!.minesAroundTotal + 1;
      }
    }
  }

  if (board.at(-1)) {
    if (board.at(-1)?.at(0)?.hasMine) {
      board.at(-1)!.at(-2)!.minesAroundTotal =
        board.at(-1)!.at(-2)!.minesAroundTotal + 1;
      board.at(-2)!.at(-2)!.minesAroundTotal =
        board.at(-2)!.at(-2)!.minesAroundTotal + 1;
      board.at(-2)!.at(0)!.minesAroundTotal =
        board.at(-2)!.at(0)!.minesAroundTotal + 1;
    }

    if (board.at(-1)?.at(-1)?.hasMine) {
      board.at(-1)!.at(-2)!.minesAroundTotal =
        board.at(-1)!.at(-2)!.minesAroundTotal + 1;
      board.at(-2)!.at(-2)!.minesAroundTotal =
        board.at(-2)!.at(-2)!.minesAroundTotal + 1;
      board.at(-2)!.at(-1)!.minesAroundTotal =
        board.at(-2)!.at(-1)!.minesAroundTotal + 1;
    }

    for (let boxPosition = 1; boxPosition < board.length - 1; boxPosition++) {
      if (board.at(-1)?.at(boxPosition)?.hasMine) {
        board.at(-1)!.at(boxPosition + 1)!.minesAroundTotal =
          board.at(-1)!.at(boxPosition + 1)!.minesAroundTotal + 1;
        board.at(-1)!.at(boxPosition - 1)!.minesAroundTotal =
          board.at(-1)!.at(boxPosition - 1)!.minesAroundTotal + 1;
        board.at(-2)!.at(boxPosition + 1)!.minesAroundTotal =
          board.at(-2)!.at(boxPosition + 1)!.minesAroundTotal + 1;
        board.at(-2)!.at(boxPosition - 1)!.minesAroundTotal =
          board.at(-2)!.at(boxPosition - 1)!.minesAroundTotal + 1;
        board.at(-2)!.at(boxPosition)!.minesAroundTotal =
          board.at(-2)!.at(boxPosition)!.minesAroundTotal + 1;
      }
    }
  }

  for (let rowPosition = 1; rowPosition < board.length - 1; rowPosition++) {
    if (board.at(rowPosition)?.at(0)?.hasMine) {
      board.at(rowPosition + 1)!.at(0)!.minesAroundTotal =
        board.at(rowPosition + 1)!.at(0)!.minesAroundTotal + 1;
      board.at(rowPosition - 1)!.at(0)!.minesAroundTotal =
        board.at(rowPosition - 1)!.at(0)!.minesAroundTotal + 1;
      board.at(rowPosition + 1)!.at(1)!.minesAroundTotal =
        board.at(rowPosition + 1)!.at(1)!.minesAroundTotal + 1;
      board.at(rowPosition - 1)!.at(1)!.minesAroundTotal =
        board.at(rowPosition - 1)!.at(1)!.minesAroundTotal + 1;
      board.at(rowPosition)!.at(1)!.minesAroundTotal =
        board.at(rowPosition)!.at(1)!.minesAroundTotal + 1;
    }

    if (board.at(rowPosition)?.at(-1)?.hasMine) {
      board.at(rowPosition + 1)!.at(-1)!.minesAroundTotal =
        board.at(rowPosition + 1)!.at(-1)!.minesAroundTotal + 1;
      board.at(rowPosition - 1)!.at(-1)!.minesAroundTotal =
        board.at(rowPosition - 1)!.at(-1)!.minesAroundTotal + 1;
      board.at(rowPosition + 1)!.at(-2)!.minesAroundTotal =
        board.at(rowPosition + 1)!.at(-2)!.minesAroundTotal + 1;
      board.at(rowPosition - 1)!.at(-2)!.minesAroundTotal =
        board.at(rowPosition - 1)!.at(-2)!.minesAroundTotal + 1;
      board.at(rowPosition)!.at(-2)!.minesAroundTotal =
        board.at(rowPosition)!.at(-2)!.minesAroundTotal + 1;
    }
  }

  for (let rowPosition = 1; rowPosition < board.length - 1; rowPosition++) {
    for (let boxPosition = 1; boxPosition < board.length - 1; boxPosition++) {
      if (board.at(rowPosition)?.at(boxPosition)?.hasMine) {
        board.at(rowPosition)!.at(boxPosition + 1)!.minesAroundTotal =
          board.at(rowPosition)!.at(boxPosition + 1)!.minesAroundTotal + 1;
        board.at(rowPosition)!.at(boxPosition - 1)!.minesAroundTotal =
          board.at(rowPosition)!.at(boxPosition - 1)!.minesAroundTotal + 1;
        board.at(rowPosition + 1)!.at(boxPosition)!.minesAroundTotal =
          board.at(rowPosition + 1)!.at(boxPosition)!.minesAroundTotal + 1;
        board.at(rowPosition - 1)!.at(boxPosition)!.minesAroundTotal =
          board.at(rowPosition - 1)!.at(boxPosition)!.minesAroundTotal + 1;
        board.at(rowPosition + 1)!.at(boxPosition + 1)!.minesAroundTotal =
          board.at(rowPosition + 1)!.at(boxPosition + 1)!.minesAroundTotal + 1;
        board.at(rowPosition - 1)!.at(boxPosition - 1)!.minesAroundTotal =
          board.at(rowPosition - 1)!.at(boxPosition - 1)!.minesAroundTotal + 1;
        board.at(rowPosition - 1)!.at(boxPosition + 1)!.minesAroundTotal =
          board.at(rowPosition - 1)!.at(boxPosition + 1)!.minesAroundTotal + 1;
        board.at(rowPosition + 1)!.at(boxPosition - 1)!.minesAroundTotal =
          board.at(rowPosition + 1)!.at(boxPosition - 1)!.minesAroundTotal + 1;
      }
    }
  }

  return board;
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

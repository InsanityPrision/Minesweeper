import { BoxOfBoard, GameBoard } from "./types.js";

const boxOfBoard: BoxOfBoard[] = [
  {
    hasMine: true,
    minesAround: 0,
  },
  {
    hasMine: false,
    minesAround: 0,
  },
  {
    hasMine: false,
    minesAround: 0,
  },
  {
    hasMine: false,
    minesAround: 0,
  },
  {
    hasMine: false,
    minesAround: 0,
  },
  {
    hasMine: false,
    minesAround: 0,
  },
  {
    hasMine: false,
    minesAround: 0,
  },
  {
    hasMine: true,
    minesAround: 0,
  },
  {
    hasMine: true,
    minesAround: 0,
  },
];

const gameBoard: GameBoard = {
  columms: boxOfBoard,
  rows: boxOfBoard,
};

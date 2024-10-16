import { BoxOfBoard, GameBoard } from "./types.js";

const boxOfBoard: BoxOfBoard[] = [
  {
    hasMine: true,
    minesAroundTotal: 0,
  },
  {
    hasMine: false,
    minesAroundTotal: 0,
  },
  {
    hasMine: false,
    minesAroundTotal: 0,
  },
  {
    hasMine: false,
    minesAroundTotal: 0,
  },
  {
    hasMine: false,
    minesAroundTotal: 0,
  },
  {
    hasMine: false,
    minesAroundTotal: 0,
  },
  {
    hasMine: false,
    minesAroundTotal: 0,
  },
  {
    hasMine: true,
    minesAroundTotal: 0,
  },
  {
    hasMine: true,
    minesAroundTotal: 0,
  },
];

const gameBoard: GameBoard = {
  columms: boxOfBoard,
  rows: boxOfBoard,
};

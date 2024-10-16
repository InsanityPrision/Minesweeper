import { BoxOfBoard, GameBoard } from "./types.js";

const boxes: BoxOfBoard[] = [
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

const board: GameBoard = {
  columms: boxes,
  rows: boxes,
};

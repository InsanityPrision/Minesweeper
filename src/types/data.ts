import { Box, Board } from "./types.js";

const boxes: Box[] = [
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

const board: Board = {
  columms: boxes,
  rows: boxes,
};

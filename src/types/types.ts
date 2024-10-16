export type BoxOfBoard = {
  hasMine: boolean;
  minesAroundTotal: 0;
};

export type GameBoard = {
  rows: BoxOfBoard[];
  columms: BoxOfBoard[];
};

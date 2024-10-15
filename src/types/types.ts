export type BoxOfBoard = {
  hasMine: boolean;
  minesAround: 0;
};

export type GameBoard = {
  rows: BoxOfBoard[];
  columms: BoxOfBoard[];
};

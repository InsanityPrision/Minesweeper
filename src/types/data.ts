type BoxOfBoard = {
  hasMine: boolean;
  minesAround: 0;
};

type GameBoard = {
  rows: BoxOfBoard[];
  columms: BoxOfBoard[];
};

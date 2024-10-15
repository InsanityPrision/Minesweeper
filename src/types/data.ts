type Box = {
  hasMine: boolean;
  minesAround: 0;
};

type GameBoard = {
  rows: Box[];
  columms: Box[];
};

export type Box = {
  hasMine: boolean;
  minesAroundTotal: 0;
};

export type Board = {
  rows: Box[];
  columms: Box[];
};

import { createBoard, calculateMinesAround } from "../../board/index.js";

export const createBox = (): HTMLLIElement[] => {
  const board = calculateMinesAround(createBoard(6));
  const boxes: HTMLLIElement[] = [];
  for (let rowPosition = 0; rowPosition < board.length; rowPosition++) {
    for (let boxPosition = 0; boxPosition < board.length; boxPosition++) {
      const box = document.createElement("li");
      box.classList.add("box");

      box.textContent = `${
        board.at(rowPosition)!.at(boxPosition)!.minesAroundTotal
      }`;

      boxes.push(box);
    }
  }
  return boxes;
};

export const createBoardContainer = (): HTMLUListElement => {
  const board = document.createElement("ul") as HTMLUListElement;
  board.classList.add("board");

  const boxes = createBox();

  boxes.forEach((box) => board.appendChild(box));

  return board;
};

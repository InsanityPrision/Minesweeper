import { createBoard, calculateMinesAround } from "../../board/index.js";

export const createBox = (): HTMLLIElement[] => {
  const board = calculateMinesAround(createBoard(6));
  const boxes: HTMLLIElement[] = [];
  for (let rowPosition = 0; rowPosition < board.length; rowPosition++) {
    for (let boxPosition = 0; boxPosition < board.length; boxPosition++) {
      const box = document.createElement("li");
      box.classList.add("box");

      const boxButton = document.createElement("button");
      boxButton.classList.add("box__box-button");

      if (board.at(rowPosition)?.at(boxPosition)?.hasMine) {
        boxButton.innerHTML =
          "<img src='icons/bomb.svg' width='40' height='40'>";
      }

      if (!board.at(rowPosition)?.at(boxPosition)?.hasMine) {
        boxButton.textContent = `${
          board.at(rowPosition)!.at(boxPosition)!.minesAroundTotal
        }`;
      }

      box.appendChild(boxButton);

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

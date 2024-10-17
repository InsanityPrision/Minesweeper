import { createBoard } from "../board/index";

describe("Given the createBoard function", () => {
  describe("When it recives 8", () => {
    test("Then it should return board with 8 rows and 8 boxes in each row", () => {
      const boardSize = 7;
      const expectedRows = 7;
      const expectedBoxes = 7;

      const rows = createBoard(boardSize);

      expect(rows.length).toBe(expectedRows);
      expect(rows.at(1)?.length).toBe(expectedBoxes);
    });
  });

  describe("When it's called", () => {
    test("Then it should return a board where each of its cell has not mines around", () => {
      const boardSize = 6;
      const expectedMinesAroundTotal = 0;

      const board = createBoard(boardSize);
      const allBoxesHaveZeroMines = board.every((row) =>
        row.every((box) => box.minesAroundTotal === expectedMinesAroundTotal)
      );

      expect(allBoxesHaveZeroMines).toBeTruthy();
    });
  });
});

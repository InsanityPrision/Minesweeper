import { createBoard } from "../board/index";

describe("Given the createBoard function", () => {
  describe("When it recives 8", () => {
    test("Then it should return board with 8 rows and 8 boxes in each row", () => {
      const number = 8;
      const expectedRows = 8;
      const expectedBoxes = 8;

      const rows = createBoard(number);

      expect(rows.length).toBe(expectedRows);
      expect(rows.at(1)?.length).toBe(expectedBoxes);
    });
  });
});

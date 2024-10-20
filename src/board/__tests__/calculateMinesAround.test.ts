import { calculateMinesAround } from "../index";
import { Board } from "../types";

describe("Given the calculateMinesAround function", () => {
  describe("When it recives a board of 3 rows and 3 boxes with a mine in the center", () => {
    test("Then it should return a board with all mines around the mine in the center with a 1 in minesAroundTotal", () => {
      const board: Board = [
        [
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
        ],
        [
          {
            hasMine: false,
            minesAroundTotal: 0,
          },
          {
            hasMine: true,
            minesAroundTotal: 0,
          },
          {
            hasMine: false,
            minesAroundTotal: 0,
          },
        ],
        [
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
        ],
      ];

      const expectedBoard = [
        [
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
        ],
        [
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
          {
            hasMine: true,
            minesAroundTotal: 0,
          },
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
        ],
        [
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
        ],
      ];

      const boardWithCalculatedMinesAround = calculateMinesAround(board);

      expect(boardWithCalculatedMinesAround).toStrictEqual(expectedBoard);
    });
  });

  describe("When it recives a board of 3 rows and 3 boxes with a mine in top left corner", () => {
    test("Then it should return a board with all mines around the mine in the top left corner with a 1 in minesAroundTotal", () => {
      const boardTest: Board = [
        [
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
        ],
        [
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
        ],
        [
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
        ],
      ];

      const expectedBoard = [
        [
          {
            hasMine: true,
            minesAroundTotal: 0,
          },
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
          {
            hasMine: false,
            minesAroundTotal: 0,
          },
        ],
        [
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
          {
            hasMine: false,
            minesAroundTotal: 0,
          },
        ],
        [
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
        ],
      ];

      const board = calculateMinesAround(boardTest);

      expect(board).toStrictEqual(expectedBoard);
    });
  });

  describe("When it recives a board of 3 rows and 3 boxes with a mine on the bottom edge ", () => {
    test("Then it should return a board with all mines around the mine on the borrom edge with a 1 in minesAroundTotal", () => {
      const boardTest: Board = [
        [
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
        ],
        [
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
        ],
        [
          {
            hasMine: false,
            minesAroundTotal: 0,
          },
          {
            hasMine: true,
            minesAroundTotal: 0,
          },
          {
            hasMine: false,
            minesAroundTotal: 0,
          },
        ],
      ];

      const expectedBoard = [
        [
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
        ],
        [
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
        ],
        [
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
          {
            hasMine: true,
            minesAroundTotal: 0,
          },
          {
            hasMine: false,
            minesAroundTotal: 1,
          },
        ],
      ];

      const board = calculateMinesAround(boardTest);

      expect(board).toStrictEqual(expectedBoard);
    });
  });
});

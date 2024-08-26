import { Player, Cell, getBoard, setBoard, rows, columns } from "./board";
import {
  checkWinner,
  yellowPlayer,
  getCurrentPlayer,
  getGameOver,
  redPlayer,
  resetGame,
  setCurrentPlayer,
  switchPlayer,
  takeTurn,
  nobodyText,
} from "./academy";

const winnerName = document.getElementById("winner-name")!;
const winnerDisplay = document.getElementById("winner-display")!;
const validCellValues: Cell[] = [redPlayer, yellowPlayer, null, nobodyText, undefined];
const validWinValues: Cell[] = [redPlayer, yellowPlayer, nobodyText];

function clearHtmlGrid() {
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      document.getElementById(
        `row-${rowIndex}-column-${columnIndex}`
      )!.innerHTML = "";
    }
  }
}

function populateHtmlGridWithBoardState(board: Cell[][]) {
  console.log("populateHtmlGridWithBoardState was called with", board);
  clearHtmlGrid();
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      if (!board[rowIndex][columnIndex]) {
        continue;
      }
      const cellPlayer = board[rowIndex][columnIndex] === redPlayer ? "redSlots" : "yellowSlots";
      document.getElementById(
        `row-${rowIndex}-column-${columnIndex}`
      )!.className = cellPlayer;
    }
  }
}

function isValidRowOrColumn(arrayOfCells: Cell[]) {
  return Array.isArray(arrayOfCells) && arrayOfCells.length === rows;
}

function isValidColumn(columnArray: Cell[]) {
  return (
    isValidRowOrColumn(columnArray) &&
    columnArray.every(function (item) {
      return validCellValues.includes(item);
    })
  );
}

function positionClick(row: number, column: number) {
  console.log(
    `positionClick was called with rowIndex=${row}, columnIndex=${column},`
  );
  const oldBoard = structuredClone(getBoard());
  const board = takeTurn(
    row,
    column,
    getGameOver(),
    getBoard(),
    getCurrentPlayer()
  );
  // console.log(`old board: ${oldBoard} `)
  // console.log(`new board: ${board} `)
  if (JSON.stringify(board) !== JSON.stringify(oldBoard)) {
    setBoard(board);
    setCurrentPlayer(switchPlayer(getCurrentPlayer()));

    // if (!isValidRowOrColumn(board[0]) || !board.every(isValidColumn)) {
    //   throw `Expecting "getBoard" to return a 2d array where all values are one of the strings ${validCellValues}. Actually received: ${JSON.stringify(board)}`;
    // }
    populateHtmlGridWithBoardState(board);
    const winner = checkWinner(board, [row, column]);
    console.log(winner);
    if (winner) {
      if (typeof winner !== "string" || !validWinValues.includes(winner)) {
        throw `Expecting "checkWinner" to return null or one of the strings ${validWinValues}. Actually received: ${winner}`;
      }
      if (winner === 0) {
        winnerDisplay.innerText = "Its a draw, you both lose";
        winnerDisplay.style.backgroundColor = "red";
      } else {
        winnerDisplay.innerText = `The winner is ${winner}`;
      }
      winnerDisplay.style.backgroundColor = "red";
    }
  }
}

function resetClick(event: any) {
  resetGame();
  winnerDisplay.style.backgroundColor = "white";
  clearHtmlGrid();
}

// Bind the click events for the grid.
export const bindClicks = () => {
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      const gridPosition = document.getElementById(
        `row-${rowIndex}-column-${columnIndex}`
      )!;
      gridPosition.addEventListener(
        "click",
        positionClick.bind(null, rowIndex, columnIndex)
      );
    }
  }
};

const resetButton = document.getElementById('reset-button')!
resetButton.addEventListener('click', resetClick)
resetGame();

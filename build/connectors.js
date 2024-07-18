"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindClicks = void 0;
const board_1 = require("./board");
const academy_1 = require("./academy");
const winnerName = document.getElementById("winner-name");
const winnerDisplay = document.getElementById("winner-display");
const validCellValues = [academy_1.redPlayer, academy_1.yellowPlayer, null, academy_1.nobodyText, undefined];
const validWinValues = [academy_1.redPlayer, academy_1.yellowPlayer, academy_1.nobodyText];
function clearHtmlGrid() {
    for (let rowIndex = 0; rowIndex < board_1.rows; rowIndex++) {
        for (let columnIndex = 0; columnIndex < board_1.columns; columnIndex++) {
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerHTML = "";
        }
    }
}
function populateHtmlGridWithBoardState(board) {
    console.log("populateHtmlGridWithBoardState was called with", board);
    clearHtmlGrid();
    for (let rowIndex = 0; rowIndex < board_1.rows; rowIndex++) {
        for (let columnIndex = 0; columnIndex < board_1.columns; columnIndex++) {
            if (!board[rowIndex][columnIndex]) {
                continue;
            }
            const cellPlayer = board[rowIndex][columnIndex] === academy_1.redPlayer ? "redSlots" : "yellowSlots";
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).className = cellPlayer;
        }
    }
}
function isValidRowOrColumn(arrayOfCells) {
    return Array.isArray(arrayOfCells) && arrayOfCells.length === board_1.rows;
}
function isValidColumn(columnArray) {
    return (isValidRowOrColumn(columnArray) &&
        columnArray.every(function (item) {
            return validCellValues.includes(item);
        }));
}
function positionClick(row, column) {
    console.log(`positionClick was called with rowIndex=${row}, columnIndex=${column},`);
    const oldBoard = structuredClone((0, board_1.getBoard)());
    const board = (0, academy_1.takeTurn)(row, column, (0, academy_1.getGameOver)(), (0, board_1.getBoard)(), (0, academy_1.getCurrentPlayer)());
    // console.log(`old board: ${oldBoard} `)
    // console.log(`new board: ${board} `)
    if (JSON.stringify(board) !== JSON.stringify(oldBoard)) {
        (0, board_1.setBoard)(board);
        (0, academy_1.setCurrentPlayer)((0, academy_1.switchPlayer)((0, academy_1.getCurrentPlayer)()));
        // if (!isValidRowOrColumn(board[0]) || !board.every(isValidColumn)) {
        //   throw `Expecting "getBoard" to return a 2d array where all values are one of the strings ${validCellValues}. Actually received: ${JSON.stringify(board)}`;
        // }
        populateHtmlGridWithBoardState(board);
        const winner = (0, academy_1.checkWinner)(board);
        console.log(winner);
        if (winner) {
            if (typeof winner !== "string" || !validWinValues.includes(winner)) {
                throw `Expecting "checkWinner" to return null or one of the strings ${validWinValues}. Actually received: ${winner}`;
            }
            if (winner === 0) {
                winnerDisplay.innerText = "Its a draw, you both lose";
                winnerDisplay.style.backgroundColor = "red";
            }
            else {
                winnerDisplay.innerText = `The winner is ${winner}`;
            }
            winnerDisplay.style.backgroundColor = "red";
        }
    }
}
function resetClick(event) {
    (0, academy_1.resetGame)();
    winnerDisplay.style.backgroundColor = "white";
    clearHtmlGrid();
}
// Bind the click events for the grid.
const bindClicks = () => {
    for (let rowIndex = 0; rowIndex < board_1.rows; rowIndex++) {
        for (let columnIndex = 0; columnIndex < board_1.columns; columnIndex++) {
            const gridPosition = document.getElementById(`row-${rowIndex}-column-${columnIndex}`);
            gridPosition.addEventListener("click", positionClick.bind(null, rowIndex, columnIndex));
        }
    }
};
exports.bindClicks = bindClicks;
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetClick);
(0, academy_1.resetGame)();

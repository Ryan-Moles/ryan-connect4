"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBoard = exports.getBoard = exports.maxturns = exports.winNumber = exports.columns = exports.rows = void 0;
exports.rows = 6;
exports.columns = 7;
exports.winNumber = 4;
exports.maxturns = exports.rows * exports.columns;
let grid = [];
const createGrid = () => {
    for (let rowIndex = 0; rowIndex < exports.rows; rowIndex++) {
        let rowDiv = document.createElement("div");
        rowDiv.setAttribute("id", `row-${rowIndex}`);
        rowDiv.setAttribute("class", "gridrows");
        document.getElementById("grid").append(rowDiv);
        grid.push([]);
        for (let columnIndex = 0; columnIndex < exports.columns; columnIndex++) {
            grid[rowIndex].push(null);
            let colDiv = document.createElement("div");
            colDiv.setAttribute("id", `row-${rowIndex}-column-${columnIndex}`);
            colDiv.setAttribute("class", "emptySlots");
            document.getElementById(`row-${rowIndex}`).append(colDiv);
        }
    }
    console.log(grid);
    console.log(`createGrid was called`);
};
const getBoard = () => {
    if (grid.length < 1 || grid == undefined) {
        createGrid();
    }
    return grid;
};
exports.getBoard = getBoard;
const setBoard = (newBoard) => {
    grid = newBoard;
};
exports.setBoard = setBoard;

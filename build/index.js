"use strict";
let rows = 6;
let columns = 7;
const grid = [];
const createGrid = () => {
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        let rowDiv = document.createElement("div");
        rowDiv.setAttribute("id", `row-${rowIndex}`);
        rowDiv.setAttribute("class", "gridrows");
        document.getElementById("grid").append(rowDiv);
        for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
            //grid[rowIndex][columnIndex]?.push("")
            console.log(`row-${rowIndex} column-${columnIndex}`);
            let colDiv = document.createElement("div");
            colDiv.setAttribute("id", `column-${columnIndex}`);
            colDiv.setAttribute("class", "gridcol");
            document.getElementById(`row-${rowIndex}`).append(colDiv);
            let idMaker = document.createElement("div");
            idMaker.setAttribute("id", `row-${rowIndex}-column-${columnIndex}`);
            idMaker.setAttribute("class", "square");
            document.getElementById(`column-${columnIndex}`).append(idMaker);
        }
    }
    console.log(grid);
};
document.body.onload = createGrid;

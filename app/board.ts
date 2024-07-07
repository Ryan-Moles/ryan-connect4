export type Player = 1 | 2 | null | 0 | undefined;
export type Cell = Player;
export const rows: number = 6;
export const columns: number = 7;
export const winNumber: number = 4;
export const maxturns: number = rows * columns
let grid: Cell[][] = [];

const createGrid = () => {
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("id", `row-${rowIndex}`);
    rowDiv.setAttribute("class", "gridrows");
    document.getElementById("grid")!.append(rowDiv);
    grid.push([])
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      grid[rowIndex].push(null);
      let colDiv = document.createElement("div");
      colDiv.setAttribute("id", `row-${rowIndex}-column-${columnIndex}`);
      colDiv.setAttribute("class", "emptySlots");
      document.getElementById(`row-${rowIndex}`)!.append(colDiv);
    }
  }
  console.log(grid);
  console.log(`createGrid was called`);
};

export const getBoard = () => {
  if (grid.length < 1 || grid == undefined) {
    createGrid()
  }
  return grid;
};
export const setBoard = (newBoard: Cell[][]) => {
  grid = newBoard;
};

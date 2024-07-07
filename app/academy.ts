import { Player, Cell, getBoard, setBoard, maxturns, rows } from "./board";
import { bindClicks } from "./connectors";

export const redPlayer = 1;
export const yellowPlayer = 2;
export const nobodyText = 0;
let player: Player = 1;
let gameOver: boolean = false;
let turns = maxturns;

export function takeTurn(
  rowIndex: number,
  columnIndex: number,
  currentGameOver: boolean,
  currentBoard: Cell[][],
  currentPlayer: Player
): Cell[][] {
  if (!gameOver) {
    console.log(
      `takeTurn was called with row: ${rowIndex}, column: ${columnIndex}`
    );
    if (currentBoard[rowIndex][columnIndex] != null) {
      console.log("This space has already been used");
    } else {
      currentBoard[rowIndex][columnIndex] = currentPlayer;
      setBoard(currentBoard);
      turns -= 1;
      console.log(turns);
      if (turns == 0) {
        setGameOver(true);
      }
    }
  }
  console.log(getBoard())
  return getBoard();
}

export function switchPlayer(currentPlayer: Player): Player {
  console.log(currentPlayer);
  if (currentPlayer === redPlayer) {
    currentPlayer = yellowPlayer;
  } else {
    currentPlayer = redPlayer;
  }
  console.log("Switch player called. Current player is", currentPlayer);
  return currentPlayer;
}

export function checkWinner(currentBoard: Cell[][]): Player { //NEED TO CHANGE TOO MAKE IT WORK FOR ANY SPECIFIED LENGTH
  console.log("checkWinner was called");
  console.log(`turns = ${turns}`)
  if (
    currentBoard[0][0] != null &&
    currentBoard[0][0] == currentBoard[1][1] &&
    currentBoard[0][0] == currentBoard[2][2]
  ) {
    console.log(currentBoard[0][0]);
    console.log(typeof currentBoard[0][0]);
    if (currentBoard[0][0] == yellowPlayer) {
      gameOver = true;
      return yellowPlayer;
    } else {
      gameOver = true;
      return redPlayer;
    }
  } else if (
    currentBoard[0][2] != null &&
    currentBoard[0][2] == currentBoard[1][1] &&
    currentBoard[0][2] == currentBoard[2][0]
  ) {
    console.log(currentBoard[0][2]);
    console.log(typeof currentBoard[0][2]);
    if (currentBoard[0][2] == yellowPlayer) {
      gameOver = true;
      return yellowPlayer;
    } else {
      gameOver = true;
      return redPlayer;
    }
  }
    else{
    for (let i = 0; i < rows; i++) {
      if (
        currentBoard[i][0] != null &&
        currentBoard[i][0] == currentBoard[i][1] &&
        currentBoard[i][0] == currentBoard[i][2]
      ) {
        console.log(currentBoard[i][0]);
        console.log(typeof currentBoard[i][0]);
        if (currentBoard[i][0] == yellowPlayer) {
          gameOver = true;
          return yellowPlayer;
        } else {
          gameOver = true;
          return redPlayer;
        }
      } else if (
        currentBoard[0][i] != null &&
        currentBoard[0][i] == currentBoard[1][i] &&
        currentBoard[0][i] == currentBoard[2][i]
      ) {
        console.log(currentBoard[i][0]);
        console.log(typeof currentBoard[i][0]);
        if (currentBoard[i][0] == yellowPlayer) {
          gameOver = true;

          return yellowPlayer;
        } else {
          gameOver = true;
          return redPlayer;
        }
      }
      else if ( turns === 0 ){
        gameOver = true
        return nobodyText
      }
    }
  }
}

export function resetGame() {
  console.log("resetGame was called");
  gameOver = false;
  turns = maxturns
  setBoard([])
  getBoard();
  bindClicks()

}

export function getCurrentPlayer(): Player {
  return player;
}

export function setCurrentPlayer(newCurrentPlayer: Player) {
  player = newCurrentPlayer;
}

export function getGameOver(): boolean {
  return gameOver;
}

export function setGameOver(newGameOver: boolean) {
  gameOver = newGameOver;
}


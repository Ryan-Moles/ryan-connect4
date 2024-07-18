"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGameOver = exports.getGameOver = exports.setCurrentPlayer = exports.getCurrentPlayer = exports.resetGame = exports.checkWinner = exports.switchPlayer = exports.takeTurn = exports.nobodyText = exports.yellowPlayer = exports.redPlayer = void 0;
const board_1 = require("./board");
const connectors_1 = require("./connectors");
exports.redPlayer = 1;
exports.yellowPlayer = 2;
exports.nobodyText = 0;
let player = 1;
let gameOver = false;
let turns = board_1.maxturns;
function takeTurn(rowIndex, columnIndex, currentGameOver, currentBoard, currentPlayer) {
    if (!gameOver) {
        console.log(`takeTurn was called with row: ${rowIndex}, column: ${columnIndex}`);
        if (currentBoard[rowIndex][columnIndex] != null) {
            console.log("This space has already been used");
        }
        else {
            currentBoard[rowIndex][columnIndex] = currentPlayer;
            (0, board_1.setBoard)(currentBoard);
            turns -= 1;
            console.log(turns);
            if (turns == 0) {
                setGameOver(true);
            }
        }
    }
    console.log((0, board_1.getBoard)());
    return (0, board_1.getBoard)();
}
exports.takeTurn = takeTurn;
function switchPlayer(currentPlayer) {
    console.log(currentPlayer);
    if (currentPlayer === exports.redPlayer) {
        currentPlayer = exports.yellowPlayer;
    }
    else {
        currentPlayer = exports.redPlayer;
    }
    console.log("Switch player called. Current player is", currentPlayer);
    return currentPlayer;
}
exports.switchPlayer = switchPlayer;
function checkWinner(currentBoard) {
    console.log("checkWinner was called");
    console.log(`turns = ${turns}`);
    if (currentBoard[0][0] != null &&
        currentBoard[0][0] == currentBoard[1][1] &&
        currentBoard[0][0] == currentBoard[2][2]) {
        console.log(currentBoard[0][0]);
        console.log(typeof currentBoard[0][0]);
        if (currentBoard[0][0] == exports.yellowPlayer) {
            gameOver = true;
            return exports.yellowPlayer;
        }
        else {
            gameOver = true;
            return exports.redPlayer;
        }
    }
    else if (currentBoard[0][2] != null &&
        currentBoard[0][2] == currentBoard[1][1] &&
        currentBoard[0][2] == currentBoard[2][0]) {
        console.log(currentBoard[0][2]);
        console.log(typeof currentBoard[0][2]);
        if (currentBoard[0][2] == exports.yellowPlayer) {
            gameOver = true;
            return exports.yellowPlayer;
        }
        else {
            gameOver = true;
            return exports.redPlayer;
        }
    }
    else {
        for (let i = 0; i < board_1.rows; i++) {
            if (currentBoard[i][0] != null &&
                currentBoard[i][0] == currentBoard[i][1] &&
                currentBoard[i][0] == currentBoard[i][2]) {
                console.log(currentBoard[i][0]);
                console.log(typeof currentBoard[i][0]);
                if (currentBoard[i][0] == exports.yellowPlayer) {
                    gameOver = true;
                    return exports.yellowPlayer;
                }
                else {
                    gameOver = true;
                    return exports.redPlayer;
                }
            }
            else if (currentBoard[0][i] != null &&
                currentBoard[0][i] == currentBoard[1][i] &&
                currentBoard[0][i] == currentBoard[2][i]) {
                console.log(currentBoard[i][0]);
                console.log(typeof currentBoard[i][0]);
                if (currentBoard[i][0] == exports.yellowPlayer) {
                    gameOver = true;
                    return exports.yellowPlayer;
                }
                else {
                    gameOver = true;
                    return exports.redPlayer;
                }
            }
            else if (turns === 0) {
                gameOver = true;
                return exports.nobodyText;
            }
        }
    }
}
exports.checkWinner = checkWinner;
function resetGame() {
    console.log("resetGame was called");
    gameOver = false;
    turns = board_1.maxturns;
    (0, board_1.setBoard)([]);
    (0, board_1.getBoard)();
    (0, connectors_1.bindClicks)();
}
exports.resetGame = resetGame;
function getCurrentPlayer() {
    return player;
}
exports.getCurrentPlayer = getCurrentPlayer;
function setCurrentPlayer(newCurrentPlayer) {
    player = newCurrentPlayer;
}
exports.setCurrentPlayer = setCurrentPlayer;
function getGameOver() {
    return gameOver;
}
exports.getGameOver = getGameOver;
function setGameOver(newGameOver) {
    gameOver = newGameOver;
}
exports.setGameOver = setGameOver;

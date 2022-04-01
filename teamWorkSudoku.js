const fs = require('fs');
const writer = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
const boardString = writer.split('\n')[0].split('');

let board = []
const converter = () => {
  const size = 9;
  let subarray = [];
  for (let i = 0; i < Math.ceil(boardString.length / size); i++) {
    subarray[i] = boardString.slice((i * size), (i * size) + size);
  }
  return subarray
}
board.push(converter())

let sudoku = (board) => {
  const squareSize = 3;
  const cellSize = 9;

  const valueFinder = (board) => {
    for (let i = 0; i < cellSize; i++) {
      for (let j = 0; j < cellSize; j++) {
        if ([i][j] === '-') {
          return [i, j];
        }
      }
    }
    return null
  }

  function solve(board) {
    const currPos = valueFinder(board)
    if (currPos === null) {
      return true
    }

    for (let i = 1: i < cellSize + 1; i++) {
      const currNum = i.toString()
    }

    return false
  }






  solve()
  return board
}
}


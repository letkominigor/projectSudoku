const fs = require('fs');
const writer = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
const boardString = writer.split('\n')[0].split('');

const converter = () => {
  let size = 9;
  let subarray = [];
  for (let i = 0; i < Math.ceil(boardString.length / size); i++) {
    subarray[i] = boardString.slice((i * size), (i * size) + size);
  }
  return subarray;
}
console.log(converter(subarray));

let sudoku = () => {
  const boxSize = 3;
  const size = 9;

  const valueFinder = () => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if ([r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null
  }
  // const column = () => {
  //   for (let r = 0; r < size; r++) {
  //     for (let c = 0; c < size; c++) {
  //       if ([r][c] === '-') {
  //         return [r, c];
  //       }
  //     }

  //   }
}



const fs = require('fs');
const writer = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
const boardString = writer.split('\n')[0].split('');

//console.log(boardString);
// Принимает доску как строку в формате как
// вы видите в файле головоломки. Возвращает
// что-то, представляющее доску после
// вашего решения попытка ее решить.
// То, как вы представляете свою доску, зависит от вас!
function solve(arr) {
  let size = 9; //размер подмассива
  let subarray = []; //массив в который будет выведен результат.
  for (let i = 0; i < Math.ceil(boardString.length / size); i++) {
    subarray[i] = boardString.slice((i * size), (i * size) + size);
  }
  return subarray;
}
<<<<<<< HEAD

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
=======
console.log(solve(boardString));

// Возвращает логическое значение, указывающее,
// или решается не указанная плата.
// Плата ввода будет в любом
// форма `solve` возвращает.
>>>>>>> 4f9035c459827ce017e291729d3209b990302776
function isSolved(board) {

}

// Принимает доску в той или иной форме и
// возвращает правильно отформатированную строку
// для вывода на экран.
// Плата ввода будет в любом
// форма `solve` возвращает.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

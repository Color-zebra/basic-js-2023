const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  const checkNeighbours = (row, column) => {
    let totalMines = 0;
    if (matrix[row-1]) totalMines += !!matrix[row-1][column-1] + !!matrix[row-1][column] + !!matrix[row-1][column+1];
    if (matrix[row+1]) totalMines += !!matrix[row+1][column-1] + !!matrix[row+1][column] + !!matrix[row+1][column+1];
    totalMines += !!matrix[row][column-1] + !!matrix[row][column+1];
    return totalMines
  }

  for (let row = 0; row < matrix.length; row++) {
    res.push(matrix[row].map((_, column) => checkNeighbours(row, column)));
  }

  return res;
}

module.exports = {
  minesweeper
};

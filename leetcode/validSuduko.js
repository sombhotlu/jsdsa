/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			console.log(board[i][j])

			if (
				isRepetitiveInSquareOfSudoku(board, i, j) ||
				isRepetitiveInRow(board, i, j) ||
				isRepetitiveInColumn(board, i, j)
			) {
				return false
			}
		}
	}

	return true
}

function isRepetitiveInSquareOfSudoku(matrix, rowNumber, columnNumber) {
	let value = matrix[rowNumber][columnNumber]

	let lowerLimitRow = rowNumber - (rowNumber % 3)
	let lowerLimitColumn = columnNumber - (columnNumber % 3)

	for (let i = lowerLimitRow; i < lowerLimitRow + 3; i++) {
		for (let j = lowerLimitColumn; j < lowerLimitColumn + 3; j++) {
			if (i == rowNumber && j === columnNumber) continue

			if (value === matrix[i][j] && matrix[i][j] !== '.') {
				return true
			}
		}
	}

	return false
}

function isRepetitiveInRow(matrix, rowNumber, columnNumber) {
	let value = matrix[rowNumber][columnNumber]

	let lowerLimitColumn = 0
	let isRepetitive = false

	for (let j = lowerLimitColumn; j < 9; j++) {
		if (j === columnNumber) continue

		if (value === matrix[rowNumber][j] && matrix[rowNumber][j] !== '.') {
			isRepetitive = true
			break
		}
	}
	return isRepetitive
}

function isRepetitiveInColumn(matrix, rowNumber, columnNumber) {
	let value = matrix[rowNumber][columnNumber]

	let lowerRowLimit = 0
	let isRepetitive = false

	for (let i = lowerRowLimit; i < 9; i++) {
		if (i == rowNumber) continue

		if (value === matrix[i][columnNumber] && matrix[i][columnNumber] !== '.') {
			isRepetitive = true
			break
		}
	}
	return isRepetitive
}

// console.log(
// 	isRepetitiveInSquareOfSudoku(
// 		[
// 			['5', '3', '.', '.', '7', '.', '.', '.', '.'],
// 			['6', '.', '.', '1', '9', '5', '.', '.', '.'],
// 			['3', '9', '8', '.', '.', '.', '.', '6', '.'],
// 			['8', '.', '.', '.', '6', '.', '.', '.', '3'],
// 			['4', '.', '.', '8', '.', '3', '.', '.', '1'],
// 			['7', '.', '.', '.', '2', '.', '.', '.', '6'],
// 			['.', '6', '.', '.', '.', '.', '2', '8', '.'],
// 			['.', '.', '.', '4', '1', '9', '.', '.', '5'],
// 			['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// 		],
// 		0,
// 		1,
// 	),
// )
// console.log(
// 	isRepetitiveInColumn(
// 		[
// 			['5', '3', '.', '.', '7', '.', '.', '.', '.'],
// 			['6', '.', '.', '1', '9', '5', '.', '.', '.'],
// 			['3', '9', '8', '.', '.', '.', '.', '6', '.'],
// 			['8', '.', '.', '.', '6', '.', '.', '.', '3'],
// 			['4', '.', '.', '8', '.', '3', '.', '.', '1'],
// 			['7', '.', '.', '.', '2', '.', '.', '.', '6'],
// 			['.', '6', '.', '.', '.', '.', '2', '8', '.'],
// 			['.', '.', '.', '4', '1', '9', '.', '.', '5'],
// 			['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// 		],
// 		0,
// 		0,
// 	),
// )
// console.log(
// 	isRepetitiveInRow(
// 		[
// 			['5', '3', '.', '.', '7', '.', '.', '.', '.'],
// 			['6', '.', '.', '1', '9', '5', '.', '.', '.'],
// 			['3', '9', '8', '.', '.', '.', '.', '6', '.'],
// 			['8', '.', '.', '.', '6', '.', '.', '.', '3'],
// 			['4', '.', '.', '8', '.', '3', '.', '.', '1'],
// 			['7', '.', '.', '.', '2', '.', '.', '.', '6'],
// 			['.', '6', '.', '.', '.', '.', '2', '8', '.'],
// 			['.', '.', '.', '4', '1', '9', '.', '.', '5'],
// 			['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// 		],
// 		0,
// 		0,
// 	),
// )
console.log(
	isValidSudoku([
		['8', '3', '.', '.', '7', '.', '.', '.', '.'],
		['6', '.', '.', '1', '9', '5', '.', '.', '.'],
		['.', '9', '8', '.', '.', '.', '.', '6', '.'],
		['8', '.', '.', '.', '6', '.', '.', '.', '3'],
		['4', '.', '.', '8', '.', '3', '.', '.', '1'],
		['7', '.', '.', '.', '2', '.', '.', '.', '6'],
		['.', '6', '.', '.', '.', '.', '2', '8', '.'],
		['.', '.', '.', '4', '1', '9', '.', '.', '5'],
		['.', '.', '.', '.', '8', '.', '.', '7', '9'],
	]),
)

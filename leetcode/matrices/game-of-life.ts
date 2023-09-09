/**
 Do not return anything, modify board in-place instead.
 */

/* 
    My logic:
        if 1 turns to 0 then make it '10'
        if 0 turns to 1 then make it '01'
 */
function gameOfLife(board: (number | string)[][]): void {
	let rows = board.length,
		columns = board[0].length

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			let ones = countOf1s(board, i, j)
			console.log(i, j, ones)
			if ((ones > 3 || ones < 2) && board[i][j] === 1) board[i][j] = '10'
			if (ones === 3 && board[i][j] === 0) board[i][j] = '01'
		}
	}

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			if (board[i][j] === '10') board[i][j] = 0
			if (board[i][j] === '01') board[i][j] = 1
		}
	}

	// return board as number[][]
}

function countOf1s(board: (number | string)[][], i: number, j: number) {
	let countOf1s = 0

	for (let k = i - 1; k <= i + 1; k++) {
		for (let l = j - 1; l <= j + 1; l++) {
			if (board[k] !== undefined && board[k][l] !== undefined)
				if (!(k === i && l === j))
					if (board[k][l] === 1 || board[k][l] === '10') countOf1s++
		}
	}

	return countOf1s
}

console.log(
	gameOfLife([
		[0, 1, 0],
		[0, 0, 1],
		[1, 1, 1],
		[0, 0, 0],
	]),
)

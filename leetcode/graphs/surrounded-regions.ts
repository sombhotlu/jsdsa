/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
	let ROW_LENGTH = board.length,
		COLUMN_LENGTH = board[0].length

	function markOsAsTs(row: number, column: number) {
		if (
			row < 0 ||
			column < 0 ||
			row === ROW_LENGTH ||
			column === COLUMN_LENGTH ||
			board[row][column] !== 'O'
		)
			return

		board[row][column] = 'T'

		markOsAsTs(row - 1, column)
		markOsAsTs(row, column + 1)
		markOsAsTs(row + 1, column)
		markOsAsTs(row, column - 1)
	}

	// for first and last column
	for (let i = 0; i < COLUMN_LENGTH; i++) {
		markOsAsTs(0, i)
		markOsAsTs(ROW_LENGTH - 1, i)
	}

	// for first and last row except the cornor elements as they are already covered
	for (let i = 1; i < ROW_LENGTH - 1; i++) {
		markOsAsTs(i, 0)
		markOsAsTs(i, COLUMN_LENGTH - 1)
	}

	for (let i = 0; i < ROW_LENGTH; i++) {
		for (let j = 0; j < COLUMN_LENGTH; j++) {
			if (board[i][j] === 'O') board[i][j] = 'X'

			if (board[i][j] === 'T') board[i][j] = 'O'
		}
	}
}

/* 
Algorithm

    Travel along the boundaries and perform find all adjacent nodes and mark then with T 'O' with 'T'
    To find all the adjacent nodes you will have to run a recurion

    Then loop over the matrix and mark all the 
    Os to Xs  &
    Ts to Os

*/

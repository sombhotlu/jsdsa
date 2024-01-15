function exist(board: string[][], word: string): boolean {
	let ROW_LENGTH = board.length,
		COLUMN_LENGTH = board[0].length

	function findRestCharsOfWord(rowIndex: number, columnIndex: number, i: number): boolean {
		if (i === word.length) return true

		if (
			rowIndex < 0 ||
			columnIndex < 0 ||
			rowIndex == ROW_LENGTH ||
			columnIndex === COLUMN_LENGTH ||
			board[rowIndex][columnIndex] === '#' ||
			board[rowIndex][columnIndex] !== word[i]
		)
			return false

		let currentVal = board[rowIndex][columnIndex]
		board[rowIndex][columnIndex] = '#'

		let result =
			findRestCharsOfWord(rowIndex - 1, columnIndex, i + 1) ||
			findRestCharsOfWord(rowIndex + 1, columnIndex, i + 1) ||
			findRestCharsOfWord(rowIndex, columnIndex - 1, i + 1) ||
			findRestCharsOfWord(rowIndex, columnIndex + 1, i + 1)

		board[rowIndex][columnIndex] = currentVal

		return result
	}

	for (let i = 0; i < ROW_LENGTH; i++) {
		for (let j = 0; j < COLUMN_LENGTH; j++) {
			if (findRestCharsOfWord(i, j, 0)) {
				return true
			}
		}
	}

	return false
}

console.log(
	exist(
		[
			['A', 'B', 'C', 'E'],
			['S', 'F', 'C', 'S'],
			['A', 'D', 'E', 'E'],
		],
		'ABCB',
	),
)

/* 
    Loop over the matrix find the starting letter then 

*/

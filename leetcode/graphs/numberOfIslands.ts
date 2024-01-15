function numIslands(grid: string[][]): number {
	let ROW_LENGTH = grid.length,
		COLUMN_LENGTH = grid[0].length

	let visitedMatrix = new Array(grid.length).fill(0).map((_) => new Array(grid[0].length).fill(0))
	let result = 0

	function markVisited(row: number, column: number) {
		if (
			row < 0 ||
			column < 0 ||
			row === ROW_LENGTH ||
			column === COLUMN_LENGTH ||
			visitedMatrix[row][column] === 1 ||
			grid[row][column] === '0'
		)
			return

		visitedMatrix[row][column] = 1

		markVisited(row - 1, column)
		markVisited(row, column + 1)
		markVisited(row + 1, column)
		markVisited(row, column - 1)
	}

	for (let i = 0; i < ROW_LENGTH; i++) {
		for (let j = 0; j < COLUMN_LENGTH; j++) {
			if (grid[i][j] === '1' && !visitedMatrix[i][j]) {
				markVisited(i, j)
				result++
			}
		}
	}

	return result
}

console.log(
	numIslands([
		['1', '1', '0', '0', '0'],
		['1', '1', '0', '0', '0'],
		['0', '0', '1', '0', '0'],
		['0', '0', '0', '1', '1'],
	]),
)

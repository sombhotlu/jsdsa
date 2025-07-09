function findBall(grid: number[][]): number[] {
	let rowLength = grid.length
	let columnLength = grid[0].length

	let output = []

	for (let ballPosition = 0; ballPosition < columnLength; ballPosition++) {
		let column = ballPosition,
			row = 0,
			itemVal
		let success = true
		while (row !== rowLength) {
			itemVal = grid[row][column]

			if (itemVal === 1 && grid[row][column + 1] === 1) {
				row++
				column++
			} else if (column > 0 && itemVal === -1 && grid[row][column - 1] === -1) {
				row++
				column--
			} else {
				success = false
				break
			}
		}
		if (success) output.push(column)
		else output.push(-1)
	}

	return output
}

console.log(
	findBall([
		[1, 1, 1, -1, -1],
		[1, 1, 1, -1, -1],
		[-1, -1, -1, 1, 1],
		[1, 1, 1, 1, -1],
		[-1, -1, -1, -1, -1],
	]),
)
console.log(
	findBall([
		[1, 1, 1, 1, 1, 1],
		[-1, -1, -1, -1, -1, -1],
		[1, 1, 1, 1, 1, 1],
		[-1, -1, -1, -1, -1, -1],
	]),
)

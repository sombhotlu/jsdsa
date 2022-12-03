var setZeroes = function (matrix: number[][]) {
	let rowLength = matrix.length
	let columnLength = matrix[0].length

	function makeColumnZero(j: number) {
		for (let i = 0; i < rowLength; i++) {
			matrix[i][j] = 0
		}
	}

	function makeRowsZero(i: number) {
		for (let j = 0; j < columnLength; j++) {
			matrix[i][j] = 0
		}
	}

	let rowsToBeZeroed = []
	let columnToBeZeroed = []

	for (let i = 0; i < rowLength; i++) {
		for (let j = 0; j < columnLength; j++) {
			if (matrix[i][j] == 0) {
				rowsToBeZeroed.push(i)
				columnToBeZeroed.push(j)
			}
		}
	}

	for (let i = 0; i < rowsToBeZeroed.length; i++) {
		makeRowsZero(rowsToBeZeroed[i])
	}

	for (let i = 0; i < columnToBeZeroed.length; i++) {
		makeColumnZero(columnToBeZeroed[i])
	}

	return matrix
}

console.log(
	setZeroes([
		[1, 1, 1],
		[1, 0, 1],
		[1, 1, 1],
	]),
)

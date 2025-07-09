function luckyNumbers(matrix: number[][]): number[] {
	let result: number[] = []
	let columns = []

	for (let i = 0; i < matrix[0].length; i++) {
		let column = []
		for (let j = 0; j < matrix.length; j++) {
			column.push(matrix[j][i])
		}
		columns.push(column)
	}

	for (let row of matrix) {
		let minVal = Math.min(...row)
		let index = row.indexOf(minVal)
		let maxVal = Math.max(...columns[index])

		if (minVal === maxVal) result.push(minVal)
	}

	return result
}

console.log(
	luckyNumbers([
		[3, 7, 8],
		[9, 11, 13],
		[15, 16, 17],
	]),
)

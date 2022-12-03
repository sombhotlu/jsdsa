function transpose(matrix: number[][]): number[][] {
	let rowLength = matrix.length,
		columnLength = matrix[0].length
	let finalResult = []
	for (let i = 0; i < rowLength; i++) {
		let newRow = []
		for (let j = 0; j < columnLength; j++) {
			newRow.push(matrix[j][i])
		}
		finalResult.push(newRow)
	}

	return finalResult
}

let swap = (arr: number[][], i: number, j: number) => {
	let temp = arr[i][j]
	arr[i][j] = arr[j][i]
	arr[j][i] = temp
}

console.log(
	transpose([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]),
)

export {}

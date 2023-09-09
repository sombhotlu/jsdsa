function rotate(matrix: number[][]): void {
	for (let i = 0; i < matrix[0].length; i++) {
		for (let j = i + 1; j < matrix.length; j++) {
			let temp = matrix[i][j]
			matrix[i][j] = matrix[j][i]
			matrix[j][i] = temp
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		matrix[i] = matrix[i].reverse()
	}
}

console.log(
	rotate([
		[5, 1, 9, 11],
		[2, 4, 8, 10],
		[13, 3, 6, 7],
		[15, 14, 12, 16],
	]),
)

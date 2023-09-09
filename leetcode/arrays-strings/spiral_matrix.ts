function spiralOrder(matrix: number[][]): number[] {
	let rowLength = matrix.length
	let columnLength = matrix[0].length
	let visited = new Array(rowLength)

	for (let i = 0; i < rowLength; i++) {
		visited[i] = new Array(columnLength).fill(false)
	}

	let result = []

	let rowIndex = 0,
		columnIndex = 0
	while (true) {
		if (!visited[rowIndex][columnIndex]) {
			result.push(matrix[rowIndex][columnIndex])
			visited[rowIndex][columnIndex] = true
		}

		while (columnIndex + 1 < columnLength && !visited[rowIndex][columnIndex + 1]) {
			columnIndex++
			result.push(matrix[rowIndex][columnIndex])
			visited[rowIndex][columnIndex] = true
		}

		while (rowIndex + 1 < rowLength && !visited[rowIndex + 1][columnIndex]) {
			rowIndex++
			result.push(matrix[rowIndex][columnIndex])
			visited[rowIndex][columnIndex] = true
		}

		while (columnIndex > 0 && !visited[rowIndex][columnIndex - 1]) {
			columnIndex--
			result.push(matrix[rowIndex][columnIndex])
			visited[rowIndex][columnIndex] = true
		}
		while (rowIndex > 0 && !visited[rowIndex - 1][columnIndex]) {
			rowIndex--
			result.push(matrix[rowIndex][columnIndex])
			visited[rowIndex][columnIndex] = true
		}

		if (result.length === rowLength * columnLength) break
	}

	return result
}

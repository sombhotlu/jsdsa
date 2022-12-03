var generate = function (numRows: number) {
	let finalResult = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

	if (numRows < 6) return finalResult.slice(0, numRows)

	for (let i = 5; i < numRows; i++) {
		let prevRow = finalResult[i - 1]
		finalResult[i] = [1]
		for (let j = 0; j < prevRow.length - 1; j++) {
			let sum = prevRow[j] + prevRow[j + 1]
			finalResult[i].push(sum)
		}
		finalResult[i].push(1)
	}

	return finalResult
}

function searchMatrix(matrix: number[][], target: number): boolean {
	let rowLength = matrix.length,
		columnLength = matrix[0].length,
		startRowIndex = 0,
		endRowIndex = rowLength - 1,
		midRowIndex = startRowIndex + Math.floor((endRowIndex - startRowIndex) / 2),
		startColumnIndex = 0,
		endColumnIndex = columnLength - 1

	while (startRowIndex <= endRowIndex) {
		midRowIndex = startRowIndex + Math.floor((endRowIndex - startRowIndex) / 2)

		if (target >= matrix[midRowIndex][0] && target <= matrix[midRowIndex][columnLength - 1])
			break
		else if (target < matrix[midRowIndex][0]) endRowIndex = midRowIndex - 1
		else if (target > matrix[midRowIndex][columnLength - 1]) startRowIndex = midRowIndex + 1
	}

	if (startRowIndex > endRowIndex) return false
	let arr = matrix[midRowIndex]

	while (startColumnIndex <= endColumnIndex) {
		let midColumnIndex = startColumnIndex + Math.floor((endColumnIndex - startColumnIndex) / 2)

		if (arr[midColumnIndex] === target) {
			return true
		} else if (arr[midColumnIndex] < target) startColumnIndex = midColumnIndex + 1
		else endColumnIndex = midColumnIndex - 1
	}

	return false
}

console.log(
	searchMatrix(
		[
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 60],
		],
		13,
	),
)

console.log(
	searchMatrix(
		[
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 60],
		],
		3,
	),
)

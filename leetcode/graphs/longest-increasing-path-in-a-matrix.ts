function longestIncreasingPath(matrix: number[][]): number {
	let ROW_LENGTH = matrix.length,
		COLUMN_LENGTH = matrix[0].length,
		LIP_Matrix = new Array(ROW_LENGTH).fill(0).map(() => new Array(COLUMN_LENGTH).fill(0))

	function dfs(row: number, column: number, previousValue: number) {
		if (
			row < 0 ||
			row === ROW_LENGTH ||
			column < 0 ||
			column === COLUMN_LENGTH ||
			matrix[row][column] <= previousValue
		) {
			return 0
		}

		if (LIP_Matrix[row][column]) return LIP_Matrix[row][column]

		let result = 1
		result = Math.max(1 + dfs(row - 1, column, matrix[row][column]), result)
		result = Math.max(1 + dfs(row, column + 1, matrix[row][column]), result)
		result = Math.max(1 + dfs(row + 1, column, matrix[row][column]), result)
		result = Math.max(1 + dfs(row, column - 1, matrix[row][column]), result)

		LIP_Matrix[row][column] = result

		return result
	}

	let finalResult = 0
	for (let i = 0; i < ROW_LENGTH; i++) {
		for (let j = 0; j < COLUMN_LENGTH; j++) {
			finalResult = Math.max(dfs(i, j, -1), finalResult)
		}
	}

	return finalResult
}

console.log(
	longestIncreasingPath([
		[3, 4, 5],
		[3, 2, 6],
		[2, 2, 1],
	]),
)

/* 
    Just learnt about this one:

    Basically we loop over every element can call DFS 

    the DFS takes in rowNumber, columnNumber & the previousElement
    it checks whether the row and the column are not out of bounds and the 
    element is greater than the previous element

    if no return 0

    let result is initialisd to 1 
    if yes it again calls dfs for the next 4 directions by adding 1 and then checking max of that result 
    with the current result 
    doing the for all 4 directions and then storing the result.
    and this result function returns the result


    Now since we are storing the result we can first check in our matrix whether that value is already present 
    if yes then return before calling another DFS function


*/

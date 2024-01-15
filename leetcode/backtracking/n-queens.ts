function totalNQueens(n: number): number {
	let cols = new Set()
	let positiveDiagonal = new Set() // r + c will be constant
	let negativeDiagonal = new Set() // r -c will be constant in this line
	let result = 0

	function backtrack(row: number) {
		if (row === n) {
			result++
			return
		}

		for (let col = 0; col < n; col++) {
			if (cols.has(col) || positiveDiagonal.has(col + row) || negativeDiagonal.has(row - col))
				continue

			cols.add(col)
			positiveDiagonal.add(row + col)
			negativeDiagonal.add(row - col)

			backtrack(row + 1)

			cols.delete(col)
			positiveDiagonal.delete(row + col)
			negativeDiagonal.delete(row - col)
		}
	}

	backtrack(0)

	return result
}

console.log(totalNQueens(4))

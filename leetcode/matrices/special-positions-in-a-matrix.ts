function numSpecial(mat: number[][]): number {
	let ROW_LENGTH = mat.length,
		COLUMN_LENGTH = mat[0].length,
		rowResultArr = new Array(ROW_LENGTH).fill(0),
		columnResultArr = new Array(COLUMN_LENGTH).fill(0),
		result = 0

	for (let i = 0; i < ROW_LENGTH; i++) {
		for (let j = 0; j < COLUMN_LENGTH; j++) {
			if (mat[i][j] == 1) {
				rowResultArr[i]++
				columnResultArr[j]++
			}
		}
	}

	for (let i = 0; i < ROW_LENGTH; i++) {
		for (let j = 0; j < COLUMN_LENGTH; j++) {
			if (mat[i][j] === 0) continue

			if (rowResultArr[i] === 1 && columnResultArr[j] === 1) result++
		}
	}

	return result
}

console.log(
	numSpecial([
		[1, 0, 0],
		[0, 0, 1],
		[1, 0, 0],
	]),
)

console.log(
	numSpecial([
		[0, 0, 0, 1],
		[1, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0],
	]),
)
console.log(
	numSpecial([
		[0, 1, 0],
		[0, 0, 0],
		[1, 0, 0],
		[1, 0, 0],
	]),
)

/* 
    General intuition:

    Loop over all the elements
    store an row set and a column set

    loop of the items in the matrix
    if it is 1 add the index to row set and column set
    and the size should increase of both the sets

    if they don't increase add them in the duplicates set of row and column

    and then do set 


*/

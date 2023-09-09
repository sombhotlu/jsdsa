/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
	if (rowsCount * colsCount !== this.length) return []
	let rows = 0,
		nums = 0,
		straightTraverse = true,
		arr = new Array(rowsCount).fill(0).map(() => new Array(colsCount).fill(0))

	for (let cols = 0; cols < colsCount; cols++) {
		if (straightTraverse) {
			while (rows < rowsCount) {
				arr[rows][cols] = this[nums]
				rows++
				nums++
			}
		} else {
			while (rows >= 0) {
				arr[rows][cols] = this[nums]
				rows--
				nums++
			}
		}

		rows = straightTraverse ? rowsCount - 1 : 0
		straightTraverse = !straightTraverse
	}

	return arr
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

let nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
console.log(nums.snail(5, 4))

nums = [1, 2, 3, 4]
console.log(nums.snail(1, 4))

nums = [1, 3]
console.log(nums.snail(2, 2))

function heightChecker(heights: number[]): number {
	let sortedHeights = heights.slice().sort((a, b) => a - b)
	let result = 0
	for (let i = 0; i < heights.length; i++) {
		if (sortedHeights[i] !== heights[i]) result++
	}

	return result
}

console.log(heightChecker([1, 1, 4, 2, 1, 3]))
console.log(heightChecker([5, 1, 2, 3, 4]))
console.log(heightChecker([1, 2, 3, 4, 5]))

function judgeSquareSum(c: number): boolean {}

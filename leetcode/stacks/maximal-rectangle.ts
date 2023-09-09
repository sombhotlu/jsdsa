function maximalRectangle(matrix: string[][]): number {
	let max = 0,
		rowLength = matrix[0].length,
		histogram = new Array(rowLength).fill(0)

	for (let row of matrix) {
		for (let i = 0; i < row.length; i++) {
			histogram[i] = Number(row[i]) * (Number(row[i]) + histogram[i])
		}

		let previousSmaller = getPreviousSmaller(histogram)
		let nextSmaller = getNextSmaller(histogram)

		for (let i = 0; i < histogram.length; i++) {
			max = Math.max(
				max,
				Number(histogram[i]) * (nextSmaller[rowLength - i - 1] - previousSmaller[i] - 1),
			)
		}
	}

	return max
}

function getPreviousSmaller(heights: number[]) {
	let leftMaxStack: number[] = []
	let previousSmaller: number[] = []
	for (let i = 0; i < heights.length; i++) {
		while (
			leftMaxStack.length > 0 &&
			heights[i] <= heights[leftMaxStack[leftMaxStack.length - 1]]
		) {
			leftMaxStack.pop()
		}

		if (leftMaxStack.length === 0) {
			previousSmaller.push(-1)
			leftMaxStack.push(i)
		} else {
			previousSmaller.push(leftMaxStack[leftMaxStack.length - 1])
			leftMaxStack.push(i)
		}
	}

	return previousSmaller
}

function getNextSmaller(heights: number[]) {
	let rightMaxStack: number[] = []
	let nextSmaller: number[] = []

	for (let i = heights.length - 1; i >= 0; i--) {
		while (
			rightMaxStack.length > 0 &&
			heights[i] <= heights[rightMaxStack[rightMaxStack.length - 1]]
		) {
			rightMaxStack.pop()
		}

		if (rightMaxStack.length === 0) {
			nextSmaller.push(heights.length)
			rightMaxStack.push(i)
		} else {
			nextSmaller.push(rightMaxStack[rightMaxStack.length - 1])
			rightMaxStack.push(i)
		}
	}

	return nextSmaller
}

// console.log(
// 	maximalRectangle([
// 		['1', '0', '1', '0', '0'],
// 		['1', '0', '1', '1', '1'],
// 		['1', '1', '1', '1', '1'],
// 		['1', '0', '0', '1', '0'],
// 	]),
// )
console.log(maximalRectangle([['1']]))

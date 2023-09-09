// function largestRectangleArea(heights: number[]): number {
// 	let max = 0,
// 		leftMaxStack: number[] = [],
// 		rightMaxStack: number[] = [],
// 		n = heights.length

// 	for (let i = 0; i < n; i++) {
// 		let j = i - 1
// 		while (j >= 0 && heights[i] <= heights[j]) {
// 			j--
// 		}
// 		leftMaxStack.push(i - j - 1)

// 		let k = n - i

// 		while (k <= n - 1 && heights[n - 1 - i] <= heights[k]) {
// 			k++
// 		}
// 		rightMaxStack.push(k - n + i)
// 	}

// 	for (let i = 0; i < n; i++) {
// 		let value = heights[i],
// 			rightCount = rightMaxStack[n - i - 1],
// 			leftCount = leftMaxStack[i]
// 		max = Math.max(max, value + value * (rightCount + leftCount))
// 	}

// 	return max
// }
function largestRectangleArea(heights: number[]): number {
	let max = 0
	let previousSmaller = getPreviousSmaller(heights)
	let nextSmaller = getNextSmaller(heights),
		n = heights.length

	// console.log(previousSmaller)
	// console.log(nextSmaller)

	for (let i = 0; i < heights.length; i++) {
		max = Math.max(max, heights[i] * (nextSmaller[n - i - 1] - previousSmaller[i] - 1))
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

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
console.log(largestRectangleArea([2, 4]))
console.log(largestRectangleArea([1, 1]))

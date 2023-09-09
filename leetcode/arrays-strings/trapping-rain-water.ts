function trap(height: number[]): number {
	let left = [],
		right = [],
		totalHeightLength = height.length,
		leftMax = 0,
		rightMax = 0,
		result = 0

	for (let i = 0; i < totalHeightLength; i++) {
		if (height[i] > leftMax) leftMax = height[i]
		if (height[totalHeightLength - i - 1] > rightMax)
			rightMax = height[totalHeightLength - i - 1]

		left[i] = leftMax
		right[totalHeightLength - i - 1] = rightMax
	}

	for (let i = 0; i < totalHeightLength; i++) {
		result += Math.min(left[i], right[i]) - height[i]
	}

	return result
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))

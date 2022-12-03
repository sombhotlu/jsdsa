function maxSubArray(nums: number[]): number {
	let max = -100000
	let currentMax = -100000

	for (let i = 0; i < nums.length; i++) {
		currentMax = currentMax + nums[i]

		if (currentMax > max) max = currentMax

		if (currentMax < 0) {
			currentMax = 0
		}
	}

	return max
}

console.log(maxSubArray([-2, -3, -10, -1, -3]))

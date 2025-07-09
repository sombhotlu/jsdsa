function maxSubArray(nums: number[]): number {
	let max = -100000
	let currentMax = 0

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > currentMax) currentMax = nums[i]
		else currentMax = currentMax + nums[i]

		if (currentMax > max) max = currentMax

		if (currentMax < 0) {
			currentMax = 0
		}
	}

	return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

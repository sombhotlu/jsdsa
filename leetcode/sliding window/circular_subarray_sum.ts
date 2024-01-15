function maxSubarraySumCircular(nums: number[]): number {
	let globalMax = nums[0],
		currentMax = nums[0],
		currentMin = nums[0],
		globalMin = nums[0],
		total = nums[0]

	for (let i = 1; i < nums.length; i++) {
		currentMax = Math.max(nums[i], currentMax + nums[i])
		currentMin = Math.min(nums[i], currentMin + nums[i])
		total += nums[i]

		globalMax = Math.max(currentMax, globalMax)
		globalMin = Math.min(currentMin, globalMin)
	}

	return globalMax < 0 ? globalMax : Math.max(total - globalMin, globalMax)
}

// console.log(maxSubarraySumCircular([5, -3, 5])) //10
// console.log(maxSubarraySumCircular([3, -1, 2, -1])) // 4
// console.log(maxSubarraySumCircular([3, -1, 2, -1])) // 4
// console.log(maxSubarraySumCircular([1, -2, 3, -2])) // 3
// console.log(maxSubarraySumCircular([-3, -2, -3])) // -2
// console.log(maxSubarraySumCircular([0, 5, 8, -9, 9, -7, 3, -2])) // 16
console.log(maxSubarraySumCircular([-5, 4, -6])) // 4

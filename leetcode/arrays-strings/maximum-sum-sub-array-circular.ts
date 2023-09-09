function maxSubarraySumCircular(nums: number[]): number {
	let maxSum = -4000,
		prevMax = -4000,
		currentSum = 0

	for (let i = 0; i < nums.length; i++) {
		currentSum += nums[i]

		if (currentSum > maxSum) {
			maxSum = currentSum
			prevMax = maxSum
		}

		if (currentSum < 0) {
			currentSum = 0
		}
	}

	let i = 0
	while (prevMax <= currentSum) {
		currentSum += nums[i]

		if (currentSum > maxSum) {
			maxSum = currentSum
			prevMax = maxSum
		}

		if (currentSum < 0 || prevMax > currentSum) {
			currentSum = 0
		}
		i++
	}

	return maxSum
}

console.log(maxSubarraySumCircular([1, -2, 3, -2])) //3
console.log(maxSubarraySumCircular([5, -3, 5])) //10
console.log(maxSubarraySumCircular([-3, -2, -3])) //-2
console.log(maxSubarraySumCircular([3, -1, 2, -1])) //4

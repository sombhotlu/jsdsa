function maxSubarraySumCircular(nums: number[]): number {
	let maxSum1 = kadaneAlgorithm(nums),
		maxSum2 = algorithm2(nums)

	console.log(maxSum1, maxSum2)

	return Math.max(maxSum1, maxSum2)
}

function kadaneAlgorithm(nums: number[]): number {
	let maxSum = Number.NEGATIVE_INFINITY,
		sum = 0

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]

		if (maxSum < sum) maxSum = sum

		if (sum < 0) {
			sum = 0
		}
	}

	return maxSum
}

function algorithm2(nums: number[]): number {
	let maxSum = Number.NEGATIVE_INFINITY,
		sum = 0,
		startIndex = 0,
		max = Number.NEGATIVE_INFINITY

	for (let i = 0; i < nums.length; i++) {
		if (sum > sum + nums[i]) {
			sum = 0
			if (i + 1 < nums.length) startIndex = i + 1
			if (max < nums[i]) max = nums[i]
		} else {
			sum += nums[i]
			if (maxSum < sum) maxSum = sum
		}
	}

	if (maxSum === Number.NEGATIVE_INFINITY) return max

	if (startIndex > 0)
		for (let i = 0; i < startIndex; i++) {
			if (sum > sum + nums[i]) {
				sum = 0
				if (i + 1 < nums.length) startIndex = i + 1
			} else {
				sum += nums[i]
				if (maxSum < sum) maxSum = sum
			}
		}

	return maxSum
}

// console.log(maxSubarraySumCircular([5, -3, 5])) //10
// console.log(maxSubarraySumCircular([3, -1, 2, -1])) // 4
// console.log(maxSubarraySumCircular([3, -1, 2, -1])) // 4
// console.log(maxSubarraySumCircular([1, -2, 3, -2])) // 3
// console.log(maxSubarraySumCircular([-3, -2, -3])) // -2
console.log(maxSubarraySumCircular([0, 5, 8, -9, 9, -7, 3, -2])) // 16

// for (let i = 0; i < nums.length; i++) {
// 	if (sum > sum + nums[i]) {
// 		sum = 0
// 		if (i + 1 < nums.length) startIndex = i + 1
// 		if (max < nums[i]) max = nums[i]
// 	} else {
// 		sum += nums[i]
// 		if (maxSum < sum) maxSum = sum
// 	}
// }

// if (maxSum === Number.NEGATIVE_INFINITY) return max

// if (startIndex > 0)
// 	for (let i = 0; i < startIndex; i++) {
// 		if (sum > sum + nums[i]) {
// 			sum = 0
// 			if (i + 1 < nums.length) startIndex = i + 1
// 		} else {
// 			sum += nums[i]
// 			if (maxSum < sum) maxSum = sum
// 		}
// 	}

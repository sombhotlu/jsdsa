function minSubArrayLen(target: number, nums: number[]): number {
	let left = 0,
		right = 1,
		sum = nums[0],
		minimumVal = Number.MAX_SAFE_INTEGER

	if (sum >= target) return 1

	while (right < nums.length) {
		if (sum - nums[left] >= target) {
			sum -= nums[left]
			left++
			minimumVal = Math.min(right - left, minimumVal)
		} else {
			sum += nums[right]
			right++
			if (sum >= target) minimumVal = Math.min(right - left, minimumVal)
		}
	}

	if (sum >= target) minimumVal = Math.min(right - left, minimumVal)

	while (sum - nums[left] >= target) {
		sum -= nums[left]
		left++
		minimumVal = Math.min(right - left, minimumVal)
	}

	return minimumVal === Number.MAX_SAFE_INTEGER ? 0 : minimumVal
}

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
// console.log(minSubArrayLen(4, [1, 4, 4]))
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
// console.log(minSubArrayLen(7, [5]))
// console.log(minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]))
// console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]))
console.log(minSubArrayLen(5, [2, 3, 1, 1, 1, 1, 1]))

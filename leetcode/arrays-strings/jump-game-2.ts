function jump(nums: number[]): number {
	if (nums.length === 1) return 0

	let result: number[] = [1, 1],
		numsLength = nums.length

	for (let i = numsLength - 3; i >= 0; i--) {
		if (nums[i] >= numsLength - 1 - i) result[numsLength - i - 1] = 1
		else {
			result[numsLength - i - 1] = Math.min(...result.slice(numsLength - i - 1 - nums[i])) + 1
		}
	}
	return result[result.length - 1]
}

// console.log(jump([2, 3, 1, 1, 4])) // 2
// console.log(jump([2, 3, 0, 1, 4])) // 2
console.log(jump([2, 2, 1, 1, 4])) // 2

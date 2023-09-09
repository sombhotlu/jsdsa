function findPeakElement(nums: number[]): number {
	let numsLength = nums.length
	if (numsLength === 1) return 0

	if (numsLength > 1) {
		if (nums[0] > nums[1]) return 0
		if (nums[numsLength - 1] > nums[numsLength - 2]) return numsLength - 1
	}

	let left = 0,
		right = numsLength - 1

	while (left <= right) {
		let mid = Math.floor((left + right) / 2)

		if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
			return mid
		} else if (nums[mid - 1] < nums[mid] && nums[mid] < nums[mid + 1]) left = mid
		else right = mid
	}

	return -1
}

console.log(findPeakElement([1, 2, 3, 1]))
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))

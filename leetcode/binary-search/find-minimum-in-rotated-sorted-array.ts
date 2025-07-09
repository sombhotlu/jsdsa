function findMin(nums: number[]): number {
	let start = 0,
		end = nums.length - 1

	if (nums[start] <= nums[end]) return nums[start]

	let mid

	while (start <= end) {
		mid = Math.floor((start + end) / 2)

		if (nums[mid] > nums[mid + 1]) return nums[mid + 1]
		if (nums[start] <= nums[mid]) start = mid + 1
		else end = mid - 1
	}

	return -1
}

// console.log(findMin([3, 4, 5, 1, 2]))
// console.log(findMin([4, 5, 6, 7, 0, 1, 2]))
console.log(findMin([11, 13, 15, 17]))
console.log(findMin([1]))

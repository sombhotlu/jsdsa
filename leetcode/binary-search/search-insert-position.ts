var searchInsert = function (nums, target) {
	return binarySearch(nums, target)
}

function binarySearch(nums, target) {
	let startIndex = 0,
		lastIndex = nums.length - 1

	while (startIndex <= lastIndex) {
		let mid = Math.floor((startIndex + lastIndex) / 2)
		if (nums[mid] === target) return mid
		else if (nums[mid] < target) {
			startIndex = mid + 1
		} else lastIndex = mid - 1
	}

	return startIndex
}

console.log(searchInsert([1, 3, 5, 6], 7))

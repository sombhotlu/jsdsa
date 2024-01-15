function searchRange(nums: number[], target: number): number[] {
	let indexOfElement = BinarySearch(nums, target, 0, nums.length - 1)
	if (indexOfElement === -1) return [-1, -1]
	let startIndex = indexOfElement,
		endIndex = indexOfElement

	while (nums[startIndex - 1] === target) startIndex--
	while (nums[endIndex + 1] === target) endIndex++

	return [startIndex, endIndex]
}

function BinarySearch(nums: number[], target: number, left: number, right: number) {
	while (left <= right) {
		let mid = Math.floor((left + right) / 2)

		if (nums[mid] === target) return mid
		else if (nums[mid] > target) right = mid - 1
		else left = mid + 1
	}

	return -1
}

let nums = [5, 7, 7, 8, 8, 10]
console.log(BinarySearch([5, 7, 7, 8, 8, 10], 8, 0, nums.length))
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))

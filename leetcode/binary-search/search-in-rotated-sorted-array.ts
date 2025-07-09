function findMid(arr: number[]): number {
	let start = 0,
		end = arr.length - 1
	let mid

	while (start <= end) {
		mid = Math.floor((start + end) / 2)

		if (arr[mid] > arr[mid + 1]) return mid
		if (arr[start] <= arr[mid]) start = mid + 1
		else end = mid - 1
	}

	return -1
}

function binarySearch(nums: number[], startIndex: number, endIndex: number, target: number) {
	let start = startIndex,
		end = endIndex

	while (start >= startIndex && start <= end) {
		let mid = Math.floor((start + end) / 2)

		if (nums[mid] === target) return mid
		else if (nums[mid] > target) {
			end = mid - 1
		} else start = mid + 1
	}

	return -1
}

function search(nums: number[], target: number): number {
	let mid = findMid(nums)
	let numsLength = nums.length

	let startIndex, endIndex
	if (target >= nums[0] && target <= nums[mid]) {
		startIndex = 0
		endIndex = mid
	} else if (target >= nums[mid + 1] && target <= nums[numsLength - 1]) {
		startIndex = mid + 1
		endIndex = numsLength - 1
	} else {
		return -1
	}

	return binarySearch(nums, startIndex, endIndex, target)
}

export {}

// console.log(search([4, 5, 1, 2, 3], 1))
console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
console.log(search([3, 4, 5, 6, 1, 2], 2))
console.log(
	search(
		[
			284, 287, 289, 293, 295, 298, 0, 3, 8, 9, 10, 11, 12, 15, 17, 19, 20, 22, 26, 29, 30,
			31, 35, 36, 37, 38, 42, 43, 45, 50, 51, 54, 56, 58, 59, 60, 62, 63, 68, 70, 73, 74, 81,
			83, 84, 87, 92, 95, 99, 101, 102, 105, 108, 109, 112, 114, 115, 116, 122, 125, 126, 127,
			129, 132, 134, 136, 137, 138, 139, 147, 149, 152, 153, 154, 155, 159, 160, 161, 163,
			164, 165, 166, 168, 169, 171, 172, 174, 176, 177, 180, 187, 188, 190, 191, 192, 198,
			200, 203, 204, 206, 207, 209, 210, 212, 214, 216, 221, 224, 227, 228, 229, 230, 233,
			235, 237, 241, 242, 243, 244, 246, 248, 252, 253, 255, 257, 259, 260, 261, 262, 265,
			266, 268, 269, 270, 271, 272, 273, 277, 279, 281,
		],
		235,
	),
)
console.log(search([1], 0))

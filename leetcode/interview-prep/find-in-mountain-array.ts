// interface MountainArray {
// 	get(index: number): number
// 	length(): number
// }

class MountainArray {
	constructor(private array: number[]) {}

	public get(index: number) {
		return this.array[index]
	}

	public length() {
		return this.array.length
	}
}

function findInMountainArray(target: number, mountainArr: MountainArray) {
	let peak = binarySearchForFindingPeak(mountainArr)
	return binarySearch(target, mountainArr, peak)
}

function binarySearchForFindingPeak(arr: MountainArray) {
	let left = 0,
		right = arr.length() - 1

	while (left <= right) {
		let mid = Math.floor((left + right) / 2)

		let leftOfMidVal = arr.get(mid - 1),
			midVal = arr.get(mid),
			rightOfMidVal = arr.get(mid + 1)

		if (leftOfMidVal < midVal && midVal > rightOfMidVal) {
			return mid
		} else if (leftOfMidVal < midVal && midVal < rightOfMidVal) left = mid + 1
		else right = mid
	}

	return -1
}

function binarySearch(target: number, arr: MountainArray, peak: number) {
	let left = 0,
		right = peak,
		mid

	while (left <= right) {
		mid = Math.floor((left + right) / 2)
		let midVal = arr.get(mid)

		if (midVal === target) {
			return mid
		}

		if (midVal > target) right = mid - 1
		else left = mid + 1
	}

	left = peak + 1
	right = arr.length() - 1

	while (left <= right) {
		mid = Math.floor((left + right) / 2)
		let midVal = arr.get(mid)

		if (midVal === target) return mid

		if (midVal > target) left = mid + 1
		else if (midVal < target) right = mid - 1
	}

	return -1
}

// console.log(findInMountainArray(5, new MountainArray([3, 5, 3, 2, 0])))
console.log(
	findInMountainArray(
		481,
		new MountainArray([
			1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56, 61, 66, 71, 76, 81, 86, 91, 96, 101, 106,
			111, 116, 121, 126, 131, 136, 141, 146, 151, 156, 161, 166, 171, 176, 181, 186, 191,
			196, 201, 206, 211, 216, 221, 226, 231, 236, 241, 246, 251, 256, 261, 266, 271, 276,
			281, 286, 291, 296, 301, 306, 311, 316, 321, 326, 331, 336, 341, 346, 351, 356, 361,
			366, 371, 376, 381, 386, 391, 396, 401, 406, 411, 416, 421, 426, 431, 436, 441, 446,
			451, 456, 461, 466, 471, 476, 481, 486, 491, 496, 501, 496, 491, 486, 481, 476, 471,
			466, 461, 456, 451, 446, 441, 436, 431, 426, 421, 416, 411, 406,
		]),
	),
)
// console.log(findInMountainArray(3, new MountainArray([1, 2, 3, 4, 5, 3, 1])))
// console.log(findInMountainArray(3, new MountainArray([0, 1, 2, 4, 2, 1])))
// console.log(findInMountainArray(3, new MountainArray([3, 5, 3, 2, 0])))

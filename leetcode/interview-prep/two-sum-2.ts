function twoSum(numbers: number[], target: number): number[] {
	for (let i = 0; i < numbers.length - 1; i++) {
		let targetDigit = target - numbers[i]
		let targetIndex = binarySearch(numbers.slice(i + 1), targetDigit)
		if (targetIndex !== -1) return [i + 1, targetIndex + 1 + i + 1]
	}
}

function binarySearch(arr: number[], target: number) {
	let start = 0,
		end = arr.length - 1
	while (start <= end) {
		let mid = Math.floor((start + end) / 2)
		if (arr[mid] === target) {
			return mid
		} else if (arr[mid] < target) {
			start = mid + 1
		} else end = mid - 1
	}
	return -1
}

console.log(twoSum([2, 7, 11, 15], 9)) // [1,2]
console.log(twoSum([2, 3, 4], 6)) // [1,3]

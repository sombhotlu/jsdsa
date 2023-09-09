function peakIndexInMountainArray(arr: number[]): number {
	return binarySearch(arr)
}

function binarySearch(arr: number[]) {
	let left = 0,
		right = arr.length - 1

	while (left <= right) {
		let mid = Math.floor((left + right) / 2)

		if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
			return mid
		} else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) left = mid
		else right = mid
	}

	return -1
}

console.log(peakIndexInMountainArray([0, 1, 0]))
console.log(peakIndexInMountainArray([0, 2, 1, 0]))
console.log(peakIndexInMountainArray([0, 10, 5, 2]))

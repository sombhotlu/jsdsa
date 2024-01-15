let combinedArr = [
	[1, 3, 20],
	[2, 5, 20],
	[3, 10, 100],
	[4, 6, 70],
	[6, 9, 60],
]

let totalLength = combinedArr.length

function binarySearch(endTime: number, i: number) {
	let start = i,
		end = totalLength - 1

	while (start >= i && start <= end) {
		let mid = Math.floor((start + end) / 2)

		if (combinedArr[mid][0] === endTime) return mid
		else if (combinedArr[mid][0] < endTime) {
			start = mid + 1
		} else end = mid - 1
	}
	return start
}

console.log(binarySearch(6, 5))

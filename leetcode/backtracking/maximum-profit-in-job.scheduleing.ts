function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
	let combinedArr = startTime.map((val, i) => [val, endTime[i], profit[i]])
	combinedArr.sort((a, b) => a[0] - b[0])
	let totalLength = startTime.length
	let cache: Record<number, number> = {}

	function binarySearch(endTime: number, i: number) {
		let start = i,
			end = totalLength - 1
		let result = totalLength

		while (start <= end) {
			let mid = Math.floor((start + end) / 2)

			if (combinedArr[mid][0] >= endTime) {
				result = mid
				end = mid - 1
			} else {
				start = mid + 1
			}
		}
		return result
	}

	function backtrack(i: number): number {
		if (i === totalLength) return 0

		if (cache[i]) return cache[i]

		let result = backtrack(i + 1)
		// do binary search for a number which has a greater startTime than
		// current element's endTime

		const j = binarySearch(combinedArr[i][1], i + 1)
		cache[i] = Math.max(combinedArr[i][2] + backtrack(j), result)
		return cache[i]
	}

	return backtrack(0)
}

console.log(jobScheduling([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60]))

/* 
    Algorithm



*/

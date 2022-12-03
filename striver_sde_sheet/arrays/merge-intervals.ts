function merge(intervals: number[][]): number[][] {
	intervals.sort((arr1, arr2) => {
		return arr1[0] < arr2[0] ? -1 : 1
	})

	let finalResult: number[][] = [],
		currentRange = intervals[0]

	for (let i = 1; i < intervals.length; i++) {
		if (currentRange[1] >= intervals[i][0]) {
			currentRange = [currentRange[0], Math.max(currentRange[1], intervals[i][1])]
		} else {
			finalResult.push(currentRange)
			currentRange = intervals[i]
		}
	}
	finalResult.push(currentRange)
	return finalResult
}

console.log(
	merge([
		[1, 3],
		[8, 10],
		[2, 6],
		[15, 18],
	]),
)

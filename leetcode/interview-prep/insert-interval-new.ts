function insert(intervals: number[][], newInterval: number[]): number[][] {
	let result: number[][] = []

	let pair = [],
		i = 0
	for (; i < intervals.length; i++) {
		const interval = intervals[i]

		if (pair.length === 0) {
			// interval is lesser than new interval
			if (newInterval[0] > interval[0] && newInterval[0] > interval[1]) {
				result.push(interval)
				continue
			}

			// new interval range is lesser than interval
			if (newInterval[0] < interval[0] && newInterval[1] < interval[0]) {
				result.push(newInterval)
				result.push(interval)
				break
			}

			// new interval is within range of interval
			if (newInterval[0] >= interval[0] && newInterval[1] <= interval[1]) {
				result.push(interval)
				break
			}
		}

		if (pair.length === 0) {
			if (newInterval[0] < interval[0]) pair.push(newInterval[0])
			else pair.push(interval[0])

			if (newInterval[1] <= interval[1]) {
				pair.push(interval[1])
				result.push(pair)
				break
			}
		}

		if (pair.length === 1) {
			if (newInterval[1] < interval[0]) {
				pair.push(newInterval[1])
				result.push(pair, interval)
				break
			}

			if (newInterval[1] < interval[1]) {
				pair.push(interval[1])
				result.push(pair)
				break
			}
		}

		// completely out of range
		if (newInterval[0] > interval[1]) {
			result.push(interval)
		}
	}

	if (pair.length === 1) {
		pair.push(newInterval[1])
		result.push(pair)
	} else result.push(...intervals.slice(i + 1))

	let theLastElement = result.at(-1)?.[1]
	if (theLastElement && newInterval[0] > theLastElement) result.push(newInterval)
	if (theLastElement === undefined) result.push(newInterval)

	return result
}

// console.log(
// 	insert(
// 		[
// 			[1, 4],
// 			[7, 12],
// 		],
// 		[0, 2],
// 	),
// )
// console.log(
// 	insert(
// 		[
// 			[1, 5],
// 			[6, 8],
// 		],
// 		[5, 6],
// 	),
// )

// console.log(
// 	insert(
// 		[
// 			[1, 2],
// 			[3, 5],
// 			[6, 7],
// 			[8, 10],
// 			[12, 16],
// 		],
// 		[4, 8],
// 	),
// )

console.log(insert([[1, 5]], [2, 7]))

// console.log(
// 	insert(
// 		[
// 			[1, 5],
// 			[6, 8],
// 		],
// 		[3, 7],
// 	),
// )

// console.log(insert([[1, 5]], [6, 8]))

/* 

    objectives:
    1. if newInterval's first number is within any range then
        the first number of existing range reamins as is.
        and the end digit is extended until we complete the end range.

    2. when checking for firstElementInRange always check for firstElement first

    let result = [], firstElementInRange = , currentElement = []
    Loop over the intervals array
        if(element[0] < newInternval[0] && element[1] < newInterval[0]) {
            result.push(element)
            continue
        }
            
        if(newInterval[0] > element[0]) {
            currentElement.push(newInterval[0])
            if(newInternval[1] < element[1]) {
                currentElement.push(newInterval[1])
            }
            result.push(currentElement)
            currentElement = []

        }
        

*/

function insert(intervals: number[][], newInterval: number[]): number[][] | undefined {
	// result will be the answer
	let result = [],
		// this is will be merging newInterval with intervals
		currentElement: number[] = [],
		gotFirstElement = false

	for (let i = 0; i < intervals.length; i++) {
		let element = intervals[i]
		if (element[0] < newInterval[0]) {
			if (element[1] < newInterval[0]) {
				result.push(element)
				continue
			} else {
				currentElement.push(element[0])
				gotFirstElement = true

				if (element[1] === newInterval[0]) continue

				if (newInterval[1] < element[1]) {
					currentElement.push(element[1])
					result.push(currentElement)
					result.push(...intervals.slice(i + 1))
					return result
				} else if (
					(intervals[i + 1] && intervals[i + 1][0] > newInterval[1]) ||
					!intervals[i + 1]
				) {
					currentElement.push(newInterval[1])
					result.push(currentElement)
					result.push(...intervals.slice(i + 1))
					return result
				}
			}
		}

		if (gotFirstElement === false && element[0] >= newInterval[0]) {
			gotFirstElement = true
			currentElement.push(newInterval[0])
			if (element[0] > newInterval[1]) {
				currentElement.push(newInterval[1])
				result.push(currentElement)
				result.push(...intervals.slice(i))
				return result
			}
		}

		if (gotFirstElement && newInterval[1] < element[1]) {
			if (newInterval[1] < element[0]) {
				currentElement.push(newInterval[1])
				result.push(currentElement)
				result.push(...intervals.slice(i))
				return result
			} else {
				currentElement.push(element[1])
				result.push(currentElement)
				result.push(...intervals.slice(i + 1))
				return result
			}
		}
	}

	if (currentElement.length === 0) {
		result.push(newInterval)
		return result
	}

	if (currentElement.length === 1) {
		currentElement.push(newInterval[1])
		result.push(currentElement)
		return result
	}
}

console.log(
	insert(
		[
			[0, 4],
			[7, 12],
		],
		[0, 5],
	),
)
console.log(
	insert(
		[
			[1, 5],
			[6, 8],
		],
		[5, 6],
	),
)

console.log(
	insert(
		[
			[1, 5],
			[6, 8],
		],
		[3, 7],
	),
)

console.log(insert([[1, 5]], [6, 8]))
// console.log(insert([], [6, 8]))
// console.log(
// 	insert(
// 		[
// 			[1, 3],
// 			[6, 9],
// 		],
// 		[2, 5],
// 	),
// ) // [[1,5],[6,9]]]

// console.log(
// 	insert(
// 		[
// 			[1, 3],
// 			[6, 9],
// 		],
// 		[4, 5],
// 	),
// ) // [[1,5],[6,9]]]

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
// ) // [[1,2],[3,10],[12,16]]

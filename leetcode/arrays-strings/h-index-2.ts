/* 
    Problem has to be solved in logarithmic time complexity hence the first thing that comes to mind is binary search one more mentioned thing is the array is sorted
    which makes the cose

    hValue, midVal
    min = 0
    max = length -1 
    while(min <= max)
        midIndex = (min + max ) / 2
        midVal = citations[mid]
        if(midVal <= (arrayLengh - mid)) {
            hVal = midVal
            min = mid + 1
        } else {
            max = mid - 1
        }

    return hVal
*/

function hIndex(citations: number[]): number {
	let hVal = 0,
		midVal,
		midIndex,
		arrayLengh = citations.length,
		min = 0,
		max = arrayLengh

	while (min <= max) {
		midIndex = Math.floor((min + max) / 2)
		midVal = citations[midIndex]
		if (midVal <= arrayLengh - midIndex) {
			hVal = Math.max(midVal, hVal)
			min = midIndex + 1
		} else {
			hVal = Math.max(arrayLengh - midIndex, hVal)
			max = midIndex - 1
		}
	}

	return hVal
}

console.log(hIndex([0, 1, 3, 5, 6])) // 3
console.log(hIndex([4, 5, 6, 100, 200])) // 4
console.log(hIndex([11, 15])) // 2
console.log(hIndex([100])) //1
console.log(hIndex([0, 1])) // 1
console.log(hIndex([1, 1])) // 1
console.log(hIndex([0, 0, 4, 4])) // 2
console.log(hIndex([0, 0])) // 0

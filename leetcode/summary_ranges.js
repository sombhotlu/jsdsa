/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
	let range = [],
		initialNum = nums[0],
		nextNum = initialNum + 1
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nextNum) {
			if (initialNum + 1 !== nextNum) {
				range.push(`${initialNum}->${nextNum - 1}`)
			} else {
				range.push(`${initialNum}`)
			}
			initialNum = nums[i]
			nextNum = initialNum + 1
		} else {
			nextNum++
		}
	}
	if (initialNum + 1 !== nextNum) range.push(`${initialNum}->${nextNum - 1}`)
	else {
		range.push(`${initialNum}`)
	}

	return range
}

// console.log(summaryRanges([0, 1, 2, 4, 5, 7]))
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))

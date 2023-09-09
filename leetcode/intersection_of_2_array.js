/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
	let nums1Length = nums1.length
	let nums2Length = nums2.length
	let minArrLength, maxArrLength, maxArr, minArr
	let result = []
	let i = 0
	j = 0

	if (nums1Length > nums2Length) {
		minArrLength = nums2Length
		minArr = nums2.sort((a, b) => a - b)
		maxArrLength = nums1Length
		maxArr = nums1.sort((a, b) => a - b)
	} else {
		minArrLength = nums1Length
		minArr = nums1.sort((a, b) => a - b)
		maxArrLength = nums2Length
		maxArr = nums2.sort((a, b) => a - b)
	}

	while (i < maxArrLength && j < minArrLength) {
		if (maxArr[i] == minArr[j]) {
			result.push(minArr[j])
			maxArr.splice(i, 1)
			j++
		} else if (maxArr[i] > minArr[j]) {
			j++
		} else {
			i++
		}

		if (i === maxArrLength) {
			j++
			i = 0
		}
	}

	return result
}

// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
// console.log(intersect([1, 2, 2, 1], [2, 2]))
// console.log(intersect([2, 1], [1, 1]))
// console.log(intersect([1, 2], [2, 1]))
console.log(
	intersect(
		[
			43, 85, 49, 2, 83, 2, 39, 99, 15, 70, 39, 27, 71, 3, 88, 5, 19, 5, 68, 34, 7, 41, 84, 2,
			13, 85, 12, 54, 7, 9, 13, 19, 92,
		],
		[
			10, 8, 53, 63, 58, 83, 26, 10, 58, 3, 61, 56, 55, 38, 81, 29, 69, 55, 86, 23, 91, 44, 9,
			98, 41, 48, 41, 16, 42, 72, 6, 4, 2, 81, 42, 84, 4, 13,
		],
	),
)

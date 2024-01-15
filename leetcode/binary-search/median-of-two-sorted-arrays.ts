function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	let lengthOfNums1 = nums1.length
	let lengthOfNums2 = nums2.length
	let totalLength = lengthOfNums1 + lengthOfNums2
	let startIndex, endIndex
	let startIndexVal = 0,
		endIndexVal = 0

	if (totalLength % 2) {
		startIndex = Math.floor(totalLength / 2)
		endIndex = startIndex
	} else {
		endIndex = totalLength / 2
		startIndex = endIndex - 1
	}

	let indexForNums1 = 0,
		indexForNums2 = 0

	while (indexForNums1 + indexForNums2 <= startIndex) {
		if (indexForNums1 === lengthOfNums1) {
			startIndexVal = nums2[indexForNums2]
			indexForNums2++
		} else if (indexForNums2 === lengthOfNums2) {
			startIndexVal = nums1[indexForNums1]
			indexForNums1++
		} else {
			if (nums1[indexForNums1] < nums2[indexForNums2]) {
				startIndexVal = nums1[indexForNums1]
				indexForNums1++
			} else {
				startIndexVal = nums2[indexForNums2]
				indexForNums2++
			}
		}
	}

	if (endIndex !== startIndex) {
		if (indexForNums1 < lengthOfNums1 && indexForNums2 < lengthOfNums2)
			if (nums1[indexForNums1] < nums2[indexForNums2]) endIndexVal = nums1[indexForNums1]
			else endIndexVal = nums2[indexForNums2]
		else if (indexForNums1 === lengthOfNums1) endIndexVal = nums2[indexForNums2]
		else endIndexVal = nums1[indexForNums1]

		return (startIndexVal + endIndexVal) / 2
	} else return startIndexVal
}

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
	let lengthOfNums2 = nums2.length,
		result: number[] = []

	let stack = [],
		nextGreaterIndex: number[] = []

	for (let i = lengthOfNums2 - 1; i >= 0; i--) {
		let val = nums2[i]

		while (stack.length > 0 && val > stack[stack.length - 1]) {
			stack.pop()
		}

		if (stack.length === 0) {
			stack.push(val)
			nextGreaterIndex.push(-1)
		} else {
			nextGreaterIndex.push(stack[stack.length - 1])
			stack.push(val)
		}
	}

	for (let i = 0; i < nums1.length; i++) {
		console.log(nums2.indexOf(nums1[i]))
		result.push(nextGreaterIndex[lengthOfNums2 - nums2.indexOf(nums1[i]) - 1])
	}

	return result
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))

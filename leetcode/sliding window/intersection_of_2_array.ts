function intersect(nums1: number[], nums2: number[]): number[] {
	if (nums2.length > nums1.length) {
		let temp = nums1
		nums1 = nums2
		nums2 = temp
	}

	let num2Map: Record<number, number> = {}
	for (let num of nums2) {
		if (num2Map[num]) num2Map[num]++
		else num2Map[num] = 1
	}

	let result = []

	let nums1Map: Record<number, number> = {}

	for (let num of nums1) {
		if (nums2.includes(num) && (nums1Map[num] || 0) < num2Map[num]) {
			result.push(num)
			nums1Map[num] = (nums1Map[num] || 0) + 1
		}
	}

	return result
}

console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))

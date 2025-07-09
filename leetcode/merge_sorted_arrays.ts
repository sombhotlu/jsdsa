function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let counter = m + n - 1
	m -= 1
	n -= 1

	while (n >= 0 && m >= 0) {
		if (nums2[n] > nums1[m]) {
			nums1[counter--] = nums2[n--]
		} else {
			nums1[counter--] = nums1[m--]
		}
	}

	while (n >= 0) {
		nums1[counter--] = nums2[n--]
	}
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))

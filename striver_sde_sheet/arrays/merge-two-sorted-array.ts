function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let j = 0,
		i = 0
	while (i < m && j < n) {
		if (nums1[i] > nums2[j]) {
			swap(nums1, i, nums2, j)
			nums2.sort((a, b) => a - b)
		} else {
			i++
		}
	}

	nums1 = [...nums1, ...nums2]
	console.log(nums1)
}

function swap(nums1: number[], m: number, nums2: number[], n: number) {
	let temp = nums1[m]
	nums1[m] = nums2[n]
	nums2[n] = temp
}

console.log(merge([1, 3, 5, 7], 4, [0, 2, 6, 8, 9], 4))

export {}

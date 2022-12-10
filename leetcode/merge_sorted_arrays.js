/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
	nums1.splice(m)
	let i = 0,
		j = 0
	while (i < n && j < nums1.length) {
		if (nums1[j] > nums2[i]) {
			nums1.splice(j, 0, nums2[i])
			i++
		}
		j++
	}

	while (i < n) {
		nums1.push(nums2[i])
		i++
	}

	return nums1
}

console.log(merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5))

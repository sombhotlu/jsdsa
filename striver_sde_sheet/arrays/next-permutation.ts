var nextPermutation = function (nums: Array<number>) {
	let n = nums.length,
		k,
		l
	for (k = n - 2; k >= 0; k--) {
		if (nums[k] < nums[k + 1]) break
	}

	if (k < 0) {
		return nums.reverse()
	} else {
		for (l = n - 1; l > k; l--) {
			if (nums[l] > nums[k]) break
		}
		swap(nums, k, l)
		console.log(nums)
		reverse(nums, k + 1)
	}
}

const swap = (arr: number[], i: number, j: number) => {
	let pos1 = arr[i]
	let pos2 = arr[j]

	arr[i] = pos2
	arr[j] = pos1
}

const reverse = (arr: number[], start: number) => {
	let end = arr.length - 1

	while (start <= end) {
		let endValue = arr[end]
		arr[end] = arr[start]
		arr[start] = endValue

		start++
		end--
	}
}

console.log(nextPermutation([1, 3, 2]))

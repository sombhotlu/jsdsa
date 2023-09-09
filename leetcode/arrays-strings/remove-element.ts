var removeElement = function (nums: Array<number>, val: number) {
	let totalLength = nums.length

	for (let i = 0; i < totalLength; i++) {
		if (nums[i] === val) {
			while (totalLength >= 0 && nums[totalLength - 1] === val) {
				totalLength--
			}

			if (totalLength === 0) {
				nums.length = 0
				return 0
			}

			if (i === totalLength) {
				nums.length = totalLength
				return nums.length
			}

			nums[i] = nums[totalLength - 1]
			totalLength -= 1
			nums.length = totalLength
		}
	}

	return nums.length
}

console.log(removeElement([3, 2, 2, 3], 3)) // 2
console.log(removeElement([1], 1)) // 2
console.log(removeElement([4, 5], 5)) // 1

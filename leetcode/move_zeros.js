/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let countOfZeros = 0,
		index = 0
	while (index < nums.length) {
		if (nums[index] === 0) {
			countOfZeros++
			nums.splice(index, 1)
		} else {
			index++
		}
	}

	nums.fill(0, index, countOfZeros + index)
	return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* 
    for every i< length -2
        for every j < length - 1 
            such that i + j = k in the remaining list

*/
var threeSum = function (nums) {
	let result = []
	if (nums.length < 3) return result
	nums.sort((a, b) => a - b)
	let myMap = {}
	for (let i = 0; i < nums.length; i++) {
		myMap[nums[i]] = i
	}

	for (let i = 0; i < nums.length - 2; i++) {
		let firstDigit = nums[i]
		if (i == 0 || nums[i - 1] !== nums[i])
			for (let j = i + 1; j < nums.length - 1; j++) {
				let twoSum = firstDigit + nums[j]

				let thirdDigitIndex = myMap[-twoSum]

				if (thirdDigitIndex > j) {
					result.push([firstDigit, nums[j], -twoSum])
					while (j < nums.length - 1 && nums[j] === nums[j + 1]) j++
				}
			}
	}
	return result
}

console.log('The value of threeSum is -->', threeSum([-1, 0, 1, 2, -1, -4]))
console.log('The value of threeSum is -->', threeSum([0, 0, 0, 0]))

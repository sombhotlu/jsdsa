/* 
    Creating a window
    first value 


*/

function numSubarraysWithSum(nums: number[], goal: number): number {
	function getSum(num: number): number {
		if (num < 0) return 0

		let result = 0,
			sum = 0,
			i = 0

		for (let j = 0; j < nums.length; j++) {
			sum += nums[j]
			while (sum > num) {
				sum -= nums[i]
				i++
			}
			result += j - i + 1
		}

		return result
	}

	return getSum(goal) - getSum(goal - 1)
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2))
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0))
console.log(numSubarraysWithSum([0, 1, 1, 1, 1], 3))
console.log(numSubarraysWithSum([0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 0))
console.log(numSubarraysWithSum([0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0], 3))

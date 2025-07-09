function isMajorityNumber(nums: number[], randomNumber: number): boolean {
	let count = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === randomNumber) count++
	}

	return count > nums.length / 2
}

function getRandomNumberInRange(num1: number, num2: number): number {
	return Math.floor(num1 + (num2 - num1) * Math.random())
}

function majorityElement(nums: number[]): number {
	for (let i = 0; i < 4; i++) {
		let randomIndex = getRandomNumberInRange(0, nums.length)
		if (isMajorityNumber(nums, nums[randomIndex])) return nums[randomIndex]
	}

	return -1
}

console.log(majorityElement([3, 2, 3]))

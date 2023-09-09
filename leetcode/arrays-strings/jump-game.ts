function canJump(nums: number[]): boolean {
	if (nums.length === 1) return true
	if (nums[0] === 0 && nums.length > 1) return false

	let allowList = new Array(nums.length).fill(0)
	allowList[0] = 1

	for (let i = 0; i < nums.length - 1; i++) {
		let num = nums[i],
			currentIndex = i

		allowList.fill(1, i + 1, i + 1 + num)

		while (num < nums.length - currentIndex) {
			if (num === 0) {
				if (!allowList.slice(i + 1).find((e) => e === 1)) return false
				else break
			}
			currentIndex += num
			num = nums[currentIndex]
		}
		if (num >= nums.length - 1 - currentIndex) {
			return true
		}
	}

	return false
}

console.log(canJump([2, 3, 1, 1, 4])) //true
console.log(canJump([3, 2, 1, 0, 4])) // false
console.log(canJump([2, 0])) // true
console.log(canJump([0, 2, 3])) // false

console.log(canJump([2, 0, 0])) // true
console.log(canJump([1, 0, 1, 0])) // false
console.log(canJump([2, 5, 0, 0])) // true
console.log(canJump([2, 1, 2, 1, 2, 1])) // true

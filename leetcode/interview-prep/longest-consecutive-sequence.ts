function longestConsecutive(nums: number[]): number {
	let set = new Set(nums),
		maxLengthOfSequence = 0

	for (let num of nums) {
		if (!set.has(num - 1)) {
			let sequence = [num]
			num += 1
			while (set.has(num)) {
				sequence.push(num)
				num += 1
			}
			maxLengthOfSequence = Math.max(maxLengthOfSequence, sequence.length)
		}
	}

	return maxLengthOfSequence
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))

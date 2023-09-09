function lengthOfLongestSubstring(s: string): number {
	let maxCount = 0,
		startIndex = 0,
		endIndex = 0,
		lengthOfS = s.length,
		tempS = ''

	while (endIndex < lengthOfS) {
		let indexOfChar = tempS.indexOf(s[endIndex])
		if (indexOfChar !== -1) {
			maxCount = Math.max(maxCount, endIndex - startIndex)
			startIndex += indexOfChar + 1
			tempS = s.slice(startIndex, endIndex)
		}

		tempS += s[endIndex]

		endIndex++
	}

	maxCount = Math.max(maxCount, endIndex - startIndex)
	return maxCount
}

console.log(lengthOfLongestSubstring('abcabcbb'))

console.log(lengthOfLongestSubstring('bbbbb')) // 1
console.log(lengthOfLongestSubstring('pwwkew')) // 3
console.log(lengthOfLongestSubstring(' ')) // 1
console.log(lengthOfLongestSubstring('dvdf')) // 3

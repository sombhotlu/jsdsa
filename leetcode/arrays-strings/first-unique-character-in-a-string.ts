function firstUniqChar(s: string): number {
	let duplicates = new Set(s)
	if (duplicates.size === s.length) return 0

	duplicates = new Set()
	let countOfChar = new Map()

	for (let i = 0; i < s.length; i++) {
		let char = s[i]
		if (!duplicates.has(char)) {
			if (!countOfChar.has(char)) countOfChar.set(char, i)
			else {
				duplicates.add(char)
				countOfChar.delete(char)
			}
		}
	}

	if (countOfChar.size === 0) return -1

	return countOfChar.entries().next().value[1]
}

console.log(firstUniqChar('aabb'))
console.log(firstUniqChar('loveleetcode'))
console.log(firstUniqChar('leetcode'))

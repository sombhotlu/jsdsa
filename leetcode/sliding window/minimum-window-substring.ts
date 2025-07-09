function minWindow(s: string, t: string): string {
	if (t.length > s.length) return ''

	// CREATE A HASH MAP FOR THE T
	let countOfCharsOfT = new Map()

	for (let char of t) {
		countOfCharsOfT.set(char, (countOfCharsOfT.get(char) ?? 0) + 1)
	}
	let count = countOfCharsOfT.size

	let i = 0,
		j = 0,
		currentMinString = s

	function openrationWhenCountIsZero() {
		if (currentMinString.length > j - i - 1) currentMinString = s.slice(i, j)

		if (countOfCharsOfT.has(s[i])) {
			let charCount = countOfCharsOfT.get(s[i])
			if (charCount === 0) count++
			countOfCharsOfT.set(s[i], charCount + 1)
		}
		i++
	}

	// loop over the string s
	while (i < s.length && j < s.length) {
		if (count === 0) {
			openrationWhenCountIsZero()
		} else {
			if (countOfCharsOfT.has(s[j])) {
				let charCount = countOfCharsOfT.get(s[j])

				if (charCount - 1 === 0) {
					count--
				}
				countOfCharsOfT.set(s[j], charCount - 1)
			}
			j++
		}
	}

	if (s === currentMinString && count !== 0) return ''
	if (count !== 0) return currentMinString

	while (count === 0) {
		openrationWhenCountIsZero()
	}

	return currentMinString
}

// console.log(minWindow('ADOBECODEBANC', 'ABC'))
// console.log(minWindow('addaba', 'aa'))
// console.log(minWindow('a', 'a'))
// console.log(minWindow('ab', 'a'))
console.log(minWindow('abcabdebac', 'cda'))
// console.log(minWindow('a', 'a¯'))

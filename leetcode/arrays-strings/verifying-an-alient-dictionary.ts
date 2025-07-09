function isAlienSorted(words: string[], order: string): boolean {
	let wordIndex = 0,
		wordsLength = words.length

	let orderMap = new Map()
	order.split('').forEach((char, i) => orderMap.set(char, i))

	let theyAreSortedInLexicographically = true

	while (wordIndex + 1 < wordsLength) {
		let maxLength = Math.max(words[wordIndex].length, words[wordIndex + 1].length)
		let firstWord = words[wordIndex]
		let secondWord = words[wordIndex + 1]

		for (let charIndex = 0; charIndex < maxLength; charIndex++) {
			let positionOfCharInFirstWord = orderMap.get(firstWord[charIndex]) ?? -1
			let positionOfCharInSecondWord = orderMap.get(secondWord[charIndex]) ?? -1

			if (positionOfCharInFirstWord === positionOfCharInSecondWord) continue

			if (positionOfCharInFirstWord > positionOfCharInSecondWord)
				theyAreSortedInLexicographically = false

			break
		}

		if (!theyAreSortedInLexicographically) break

		wordIndex++
	}

	return theyAreSortedInLexicographically
}

console.log(isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz'))
console.log(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz'))
console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'))

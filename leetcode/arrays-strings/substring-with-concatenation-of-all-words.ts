function doesConcatenationExists(
	s: string,
	startingWord: string,
	firstIndex: number,
	uniqeWordsLength: number,
	map: Map<string, number>,
): boolean {
	let wordLength = startingWord.length
	let nextIndex = firstIndex + wordLength
	while (true) {
		let nextWord = s.substring(nextIndex, nextIndex + wordLength)
		let value = map.get(nextWord)!
		if (map.has(nextWord) && value >= 1) {
			map.set(nextWord, value - 1)
			if (value - 1 === 0) uniqeWordsLength -= 1
		} else return false

		nextIndex += wordLength

		if (uniqeWordsLength === 0) return true
	}
}

function findSubstring(s: string, words: string[]): number[] {
	let map = new Map()

	for (let word of words) {
		if (!map.has(word)) map.set(word, 1)
		else map.set(word, map.get(word) + 1)
	}

	let uniqeWords = Array.from(new Set(words))
	let uniqueWordsLength = uniqeWords.length
	let result = []

	for (let word of uniqeWords) {
		let firstIndexOfWord = s.indexOf(word)
		if (firstIndexOfWord === -1) return []

		let uniqueWordLength = Array.from(new Set(word)).length

		while (firstIndexOfWord !== -1) {
			let tempMap = new Map(map)
			let val = tempMap.get(word)
			let uniqeWordsLengthCopy = uniqueWordsLength
			tempMap.set(word, val - 1)
			if (val - 1 === 0) uniqeWordsLengthCopy--

			if (uniqeWordsLengthCopy === 0) result.push(firstIndexOfWord)

			if (doesConcatenationExists(s, word, firstIndexOfWord, uniqeWordsLengthCopy, tempMap)) {
				result.push(firstIndexOfWord)
			}

			firstIndexOfWord = s.indexOf(word, firstIndexOfWord + uniqueWordLength)
		}
	}

	return result
}

// console.log(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']))
// console.log(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the']))
// console.log(
// 	findSubstring('bcabbcaabbccacacbabccacaababcbb', ['c', 'b', 'a', 'c', 'a', 'a', 'a', 'b', 'c']),
// )
console.log(findSubstring('aa', ['aa', 'aa']))
// console.log(findSubstring('a', ['a']))

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
	if (!wordList.includes(endWord)) return 0

	// create a pattern map
	let patterns = new Map<string, string[]>()
	wordList.push(beginWord)
	for (let word of wordList) {
		for (let i = 0; i < word.length; i++) {
			let charsBeforeI = word.slice(0, i)
			let charsAfterI = word.slice(i + 1)
			let wordPattern = charsBeforeI + '*' + charsAfterI

			let patternList = patterns.get(wordPattern)
			if (patternList) {
				patternList.push(word)
				patterns.set(wordPattern, patternList)
			} else {
				patterns.set(wordPattern, [word])
			}
		}
	}

	// console.log(patterns)
	let result = 1

	let queue: [string] = [beginWord]
	let visited: Set<string> = new Set([beginWord])

	// loop  over the queue

	while (queue.length) {
		let currenQueueLength = queue.length

		for (let i = 0; i < currenQueueLength; i++) {
			let word = queue.shift()!

			// find patterns of the word
			for (let i = 0; i < word.length; i++) {
				let charsBeforeI = word.slice(0, i)
				let charsAfterI = word.slice(i + 1)
				let wordPattern = charsBeforeI + '*' + charsAfterI

				let patternList = patterns.get(wordPattern)
				if (patternList?.length) {
					for (let neighbor of patternList) {
						if (neighbor === endWord) return result + 1

						if (!visited.has(neighbor)) {
							visited.add(neighbor)
							queue.push(neighbor)
						}
					}
				}
			}
		}

		result = result + 1
	}

	return 0
}

/* 
	Basically we are looping over the wordList and creating a Map of the patterns 

*/

console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))
console.log(ladderLength('a', 'c', ['a', 'b', 'c']))

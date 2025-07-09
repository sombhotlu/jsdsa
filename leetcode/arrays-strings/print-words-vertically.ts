function printVertically(s: string): string[] {
	let words = s.split(' ')
	let maxLength = Math.max(...words.map((word) => word.length))
	let wordsLength = words.length

	let result = []

	for (let i = 0; i < maxLength; i++) {
		let str = ''
		for (let j = 0; j < wordsLength; j++) {
			str += words[j][i] ?? ' '
		}
		str = str.trimEnd()
		result.push(str)
	}

	return result
}

console.log(printVertically('HOW ARE YOU'))
console.log(printVertically('TO BE OR NOT TO BE'))
console.log(printVertically('CONTEST IS COMING'))
// console.log(printVertically('I KNOW'))

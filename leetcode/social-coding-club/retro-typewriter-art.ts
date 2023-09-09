/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const T: string = '1sp 1/ 1bS 1_ 1/ 1bS nl 1( 1sp 1o 1. 1o 1sp 1) nl 1sp 1> 1sp 1^ 1sp 1< nl 2sp 3|'

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

let map: Record<string, string> = {
	sp: ' ',
	bS: '\\',
	sQ: "'",
	nl: '\n',
}

let words = T.split(' ')
let result = []

for (let word of words) {
	if (isNaN(Number(word)) || word.includes('.')) {
		let i = 0,
			chars = ''
		while (i < word.length && !isNaN(Number(word[i]))) {
			chars += word[i]
			i++
		}
		let wordToBeReplaced = word.slice(i)
		if (chars) result.push(stringToReplacer(map, wordToBeReplaced).repeat(Number(chars)))
		else result.push(map[word])
	} else {
		let lastDigit = Number(word) % 10
		let number = Number(word) / 10
		result.push(`${lastDigit}`.repeat(number))
	}
}

function stringToReplacer(obj = map, word: string) {
	for (let key of Object.keys(obj)) {
		word = word.replace(new RegExp(key, 'g'), obj[key])
	}
	return word.toString()
}

console.log(result.join(''))

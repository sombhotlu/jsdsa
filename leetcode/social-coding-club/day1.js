/**
 * @param {string} s
 * @return {boolean}
 */

/* 
    make everything lowercase and then 
*/

var halvesAreAlike = function (s) {
	let lowerCaseString = s.toLowerCase()

	let countOfFirstHalf = 0
	let countOfSecondHalf = 0

	let vowels = ['a', 'e', 'i', 'o', 'u']
	let firstHalfOfString = lowerCaseString.slice(0, s.length / 2)
	let secondHalfOfString = lowerCaseString.slice(s.length / 2)

	for (let i = 0; i < firstHalfOfString.length; i++) {
		if (vowels.includes(firstHalfOfString[i])) countOfFirstHalf++
		if (vowels.includes(secondHalfOfString[i])) countOfSecondHalf++
	}

	return countOfFirstHalf === countOfSecondHalf
}

console.log(halvesAreAlike('book'))
console.log(halvesAreAlike('textbook'))
console.log(halvesAreAlike('tkPAdxpMfJiltOerItiv'))

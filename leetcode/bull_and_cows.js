/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
	let countOfBulls = 0,
		countOfCows = 0

	let countOfCharsInSecret = new Map()
	let countOfCharsInGuess = new Map()

	for (let i = 0; i < secret.length; i++) {
		let secretChar = secret[i]
		let guessChar = guess[i]
		if (secretChar === guessChar) {
			countOfBulls++
		} else {
			if (countOfCharsInSecret.get(secretChar)) {
				countOfCharsInSecret.set(secretChar, countOfCharsInSecret.get(secretChar) + 1)
			} else {
				countOfCharsInSecret.set(secretChar, 1)
			}

			if (countOfCharsInGuess.get(guessChar)) {
				countOfCharsInGuess.set(guessChar, countOfCharsInGuess.get(guessChar) + 1)
			} else {
				countOfCharsInGuess.set(guessChar, 1)
			}
		}
	}

	for (let [char, val] of countOfCharsInSecret) {
		if (countOfCharsInGuess.get(char)) {
			countOfCows += Math.min(val, countOfCharsInGuess.get(char))
		}
	}

	return `${countOfBulls}A${countOfCows}B`
}

console.log(getHint('1807', '7810'))
console.log(getHint('1123', '0111'))

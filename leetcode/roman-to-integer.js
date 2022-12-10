/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	let romanToIntegerMap = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	}
	let integerNumber = romanToIntegerMap[s[0]]
	for (let i = 1; i < s.length; i++) {
		integerNumber += romanToIntegerMap[s[i]]
		if (
			(['V', 'X'].includes(s[i]) && s[i - 1] === 'I') ||
			(['L', 'C'].includes(s[i]) && s[i - 1] === 'X') ||
			(['D', 'M'].includes(s[i]) && s[i - 1] === 'C')
		)
			integerNumber -= 2 * romanToIntegerMap[s[i - 1]]
	}

	return integerNumber
}

// console.log(romanToInt('III'))
// console.log(romanToInt('LVIII'))
// console.log(romanToInt('MCMXCIV'))
// console.log(romanToInt('IX'))

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	s = s.toLowerCase()
	let validPalindrome = true
	let start = 0,
		end = s.length - 1
	let regEx = /[a-z0-9]/
	while (start <= end) {
		let letterFromLeft = s[start],
			letterFromRight = s[end]

		if (!regEx.test(letterFromLeft)) {
			start++
			continue
		}

		if (!regEx.test(letterFromRight)) {
			end--
			continue
		}

		if (letterFromLeft === letterFromRight) {
			start++
			end--
		} else {
			validPalindrome = false
			break
		}
	}

	return validPalindrome
}

// console.log(isPalindrome('race a car'))
console.log(isPalindrome('0P'))

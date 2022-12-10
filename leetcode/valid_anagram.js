/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	let map = {}

	for (let l of s) {
		if (!map[l]) map[l] = 1
		else map[l]++
	}

	let validAnagram = true

	for (let l of t) {
		if (!map[l]) {
			validAnagram = false
			break
		} else {
			map[l]--
			if (map[l] < 0) {
				validAnagram = false
				break
			}
		}
	}
	let valuesRemaining = Object.values(map).some((val) => val > 0)
	return validAnagram && !valuesRemaining
}

console.log(isAnagram('a', 'ab'))

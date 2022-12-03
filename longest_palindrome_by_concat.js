var longestPalindrome = function (words) {
	let count = 0
	let map = new Map()
	let sameCharMap = new Map()
	for (let i = 0; i < words.length; i++) {
		if (words[i][0] === words[i][1]) {
			sameCharMap.set(words[i], sameCharMap.get(words[i]) + 1 || 1)
		} else {
			map.set(words[i], map.get(words[i]) + 1 || 1)
		}
	}

	console.log('sameCharMap -->', sameCharMap)

	let maxOddValue = 0,
		maxOddKey = ''
	for (let [key, value] of sameCharMap) {
		if (value % 2 === 0) count += value
		else {
			if (value > maxOddValue) {
				maxOddValue = value
				maxOddKey = key
			}
		}
	}
	sameCharMap.delete(maxOddKey)
	console.log('sameCharMap after -->', count, sameCharMap)
	for (let value of sameCharMap.values()) {
		if (!(value % 2 === 0)) {
			count += value - 1
			console.log('The count increments too -->', value, count)
		}
	}

	count += maxOddValue

	console.log('maxOddValue -->', count, maxOddValue)

	for (const [key, value] of map) {
		let reverseVal = map.get(`${key[1]}${key[0]}`)

		if (reverseVal) {
			count += Math.min(value, reverseVal) * 2
			map.delete(key)
			map.delete(`${key[1]}${key[0]}`)
		}
		console.log('my is -->', map)
	}

	return count * 2
}

console.log(longestPalindrome(['lc', 'cl', 'gg']))
console.log(longestPalindrome(['ab', 'ty', 'yt', 'lc', 'cl', 'ab']))
console.log(longestPalindrome(['cc', 'll', 'xx']))
console.log(
	longestPalindrome([
		'dd',
		'aa',
		'bb',
		'dd',
		'aa',
		'dd',
		'bb',
		'dd',
		'aa',
		'cc',
		'bb',
		'cc',
		'dd',
		'cc',
	]),
)
console.log(
	longestPalindrome([
		'll',
		'lb',
		'bb',
		'bx',
		'xx',
		'lx',
		'xx',
		'lx',
		'll',
		'xb',
		'bx',
		'lb',
		'bb',
		'lb',
		'bl',
		'bb',
		'bx',
		'xl',
		'lb',
		'xx',
	]),
)

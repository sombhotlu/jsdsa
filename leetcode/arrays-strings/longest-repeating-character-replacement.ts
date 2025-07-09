/* 
    first pass find the maximum value of char
    then loop
*/

function characterReplacement(s: string, k: number): number {
	let map = new Map(),
		left = 0,
		right = 0,
		result = 0
	let countOfMaxOccuringChar = 0

	while (right < s.length) {
		let char = s[right]
		if (!map.has(char)) map.set(char, 1)
		else map.set(char, map.get(char) + 1)

		countOfMaxOccuringChar = Math.max(map.get(char), countOfMaxOccuringChar)

		if (right - left + 1 - countOfMaxOccuringChar <= k)
			result = Math.max(result, right - left + 1)
		else {
			map.set(s[left], map.get(s[left]) - 1)
			left++
		}

		right++
	}

	return result
}

console.log(characterReplacement('ABAB', 2))
console.log(characterReplacement('AABABBA', 1))
// console.log(characterReplacement('AAAB', 0))
// console.log(characterReplacement('ABAA', 0))
console.log(
	characterReplacement(
		'KRSCDCSONAJNHLBMDQGIFCPEKPOHQIHLTDIQGEKLRLCQNBOHNDQGHJPNDQPERNFSSSRDEQLFPCCCARFMDLHADJADAGNNSBNCJQOF',
		4,
	),
)

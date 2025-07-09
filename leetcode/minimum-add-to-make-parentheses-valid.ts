function minAddToMakeValid(s: string): number {
	let result = 0

	for (let paren of s) {
		if ('(' === paren) {
			result++
		} else if (validOpenParen) {
			result--
		} else {
			result++
		}
	}

	return result + validOpenParen
}

console.log(minAddToMakeValid('())'))
console.log(minAddToMakeValid('((('))
console.log(minAddToMakeValid(')(()'))

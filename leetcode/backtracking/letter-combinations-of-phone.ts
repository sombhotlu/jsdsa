function letterCombinations(digits: string): string[] {
	let mapping: Record<string, string> = {
		'2': 'abc',
		'3': 'def',
		'4': 'ghi',
		'5': 'jkl',
		'6': 'mno',
		'7': 'pqrs',
		'8': 'tuv',
		'9': 'wxyz',
	}

	let result: string[] = []

	if (digits.length === 0) return result

	function combinations(i: number, characters: string) {
		if (characters.length === digits.length) {
			result.push(characters)
			return
		}

		for (let char of mapping[digits[i]]) {
			combinations(i + 1, characters + char)
		}
	}

	combinations(0, '')

	return result
}

console.log(letterCombinations('23'))

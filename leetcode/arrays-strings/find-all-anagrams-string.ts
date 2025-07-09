function isValuesEmpty(obj: Record<string, number>) {
	return Object.values(obj).every((val) => val === 0)
}

function findAnagrams(s: string, p: string): number[] {
	let p1 = 0,
		p2 = 0

	let map: Record<string, number> = {}
	for (let char of p) {
		if (map[char]) map[char]++
		else map[char] = 1
	}

	let result = []
	let sLength = s.length,
		pLength = p.length

	while (p1 < sLength) {
		if (p2 - p1 === pLength && isValuesEmpty(map)) result.push(p1)

		if (p2 - p1 <= pLength - 1) {
			if (p.includes(s[p2])) map[s[p2]]--
			p2++
		} else {
			if (p.includes(s[p1])) map[s[p1]]++
			p1++
		}
	}

	return result
}

console.log(findAnagrams('cbaebabacd', 'abc'))
console.log(findAnagrams('abab', 'ab'))

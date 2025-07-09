function isAnagram(s: string, t: string): boolean {
	let countArray = new Array(26).fill(0)
	for (let i = 0; i < s.length; i++) {
		countArray[s.charCodeAt(i) - 97]++
	}

	for (let i = 0; i < t.length; i++) {
		countArray[t.charCodeAt(i) - 97]--
	}

	return Number(countArray.join('')) === 0
}

console.log(isAnagram('anagram', 'nagaram'))

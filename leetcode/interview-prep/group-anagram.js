var groupAnagrams = function (strs) {
	let result = [],
		distributions = []

	for (let s of strs) {
		let distribution = findChars(s)
		let matchFound = false
		let keysOfDistribution = Object.keys(distribution)
		for (let i = 0; i < distributions.length; i++) {
			let d = distributions[i]
			let similar = keysOfDistribution.every((key) => distribution[key] === d[key])

			if (similar) {
				result[i].push(s)
				matchFound = true
				break
			}
		}

		if (!matchFound) {
			distributions.push(distribution)
			result.push([s])
		}
	}

	return result
}

const findChars = (str) => {
	let obj = {}
	for (let s of str) {
		if (!obj[s]) obj[s] = 1
		else obj[s]++
	}

	return obj
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
console.log(groupAnagrams(['ac', 'c']))

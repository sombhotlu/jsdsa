function minMutation(startGene: string, endGene: string, bank: string[]): number {
	let visited: Set<string> = new Set()
	let queue: [string, number][] = [[startGene, 0]]

	while (queue.length) {
		let [geneString, move] = queue.shift()!

		for (let i = 0; i < 8; i++) {
			let stringBeforeI = geneString.substring(0, i)
			let restOfTheString = geneString.substring(i + 1)

			for (let validGeneChar of ['A', 'C', 'G', 'T']) {
				let intermediateGene = stringBeforeI + validGeneChar + restOfTheString
				if (bank.includes(intermediateGene)) {
					if (endGene === intermediateGene) return move + 1
					else if (!visited.has(intermediateGene)) {
						visited.add(intermediateGene)
						queue.push([intermediateGene, move + 1])
					}
				}
			}
		}
	}
	return -1
}

console.log(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA']))
console.log(minMutation('AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA']))

function sortPeople(names: string[], heights: number[]): string[] {
	let objMap: Record<number, string[]> = {}

	for (let i = 0; i < heights.length; i++) {
		if (objMap[heights[i]]) objMap[heights[i]].push(names[i])
		else objMap[heights[i]] = [names[i]]
	}

	let uniqueHeights = new Set(heights)
	return Array.from(uniqueHeights)
		.sort((a, b) => b - a)
		.flatMap((height) => objMap[height])
}

console.log(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170]))

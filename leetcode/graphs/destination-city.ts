function destCity(paths: [string, string][]): string {
	let sourceCity: string = paths[0][0]
	let cityMap: Map<string, string> = new Map(paths)

	let destinationCity
	while (cityMap.has(sourceCity!)) {
		destinationCity = cityMap.get(sourceCity!)
		sourceCity = destinationCity!
	}

	return sourceCity
}

console.log(
	destCity([
		['B', 'C'],
		['D', 'B'],
		['C', 'A'],
	]),
)

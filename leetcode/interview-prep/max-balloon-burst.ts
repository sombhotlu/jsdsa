function findMinArrowShots(points: number[][]): number {
	points = points.sort((a, b) => {
		if (a[1] < b[1]) {
			return -1
		} else if (a[1] > b[1]) {
			return 1
		}
		return 0
	})

	let count = 1,
		currentIndex = 0,
		i = 1

	while (i < points.length) {
		while (i < points.length && points[currentIndex]?.[1] >= points[i]?.[0]) {
			i++
		}

		if (i < points.length) {
			count++
			currentIndex = i
		}
	}

	return count
}

console.log(
	findMinArrowShots([
		[10, 16],
		[2, 8],
		[1, 6],
		[7, 12],
	]),
)
console.log(
	findMinArrowShots([
		[1, 2],
		[3, 4],
		[5, 6],
		[7, 8],
	]),
)

console.log(
	findMinArrowShots([
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
	]),
)

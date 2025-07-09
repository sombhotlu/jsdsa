function maxPoints(points: number[][]): number {
	let maxAscending = 1,
		maxOnX = 1,
		maxOnY = 1,
		maxDescending = 1
	points.sort((point1, point2) => {
		if (point1[0] > point2[0]) return 1
		else if (point1[0] < point2[0]) return -1
		else return point1[1] - point2[1]
	})

	// for (let i = 0; i < points.length; i++) {
	//     for (let j = i + 1; j < points.length; j++) {
	//         if (points[i][0] === points[j][0] && points[j][1] > points[j][1]) maxOnY++

	//         if (points[i][0] > points[i - 1][0] && points[i][1] > points[i - 1][1])
	//     }
	// }

	points.sort((point1, point2) => {
		if (point2[1] < point1[1]) return -1
		else if (point2[1] > point1[1]) return 1
		else return point2[0] - point1[0]
	})

	console.log(points)
}

console.log(
	maxPoints([
		[1, 4],
		[1, 1],
		[3, 2],
		[5, 3],
		[4, 1],
		[2, 3],
	]),
)

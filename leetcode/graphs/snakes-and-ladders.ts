function snakesAndLadders(board: number[][]): number {
	const n = board.length
	board = board.reverse()

	function getCoordsOfNumber(value: number) {
		const row = Math.floor(value / n)
		let column = value % n
		if (row % 2) {
			column = n - 1 - column
		}
		return [row, column]
	}

	let queue: [number, number][] = [[1, 0]] // [position, number_of_moves_to_get_there]
	let visited: boolean[] = []

	while (queue.length) {
		let [position, moves] = queue.shift()!

		for (let i of [1, 2, 3, 4, 5, 6]) {
			let nextPosition = position + i
			let [row, column] = getCoordsOfNumber(nextPosition - 1)
			if (board[row][column] !== -1) {
				nextPosition = board[row][column]
			}
			if (nextPosition === n * n) return moves + 1
			if (!visited[nextPosition]) {
				queue.push([nextPosition, moves + 1])
				visited[nextPosition] = true
			}
		}
	}
	return -1
}

console.log(
	snakesAndLadders([
		[-1, -1, -1, -1, -1, -1],
		[-1, -1, -1, -1, -1, -1],
		[-1, -1, -1, -1, -1, -1],
		[-1, 35, -1, -1, 13, -1],
		[-1, -1, -1, -1, -1, -1],
		[-1, 15, -1, -1, -1, -1],
	]),
)

console.log(
	snakesAndLadders([
		[-1, -1],
		[-1, 3],
	]),
)

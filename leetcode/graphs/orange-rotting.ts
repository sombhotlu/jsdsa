import {Queue} from '@datastructures-js/queue'

function bfs(grid: number[][], queue: Queue<[number, number]>): number {
	let count = 0
	let rowLength = grid.length
	let columnLength = grid[0].length

	while (!queue.isEmpty()) {
		let [rowIndex, columnIndex] = queue.dequeue()
		if (rowIndex === rowLength && columnIndex === columnLength) {
			if (queue.size() > 0) {
				count++
				queue.push([rowIndex, columnIndex])
				continue
			} else return count
		}

		if (rowIndex - 1 >= 0 && grid[rowIndex - 1][columnIndex] === 1) {
			grid[rowIndex - 1][columnIndex] = 2
			queue.push([rowIndex - 1, columnIndex])
		}

		if (rowIndex + 1 < rowLength && grid[rowIndex + 1][columnIndex] === 1) {
			grid[rowIndex + 1][columnIndex] = 2
			queue.push([rowIndex + 1, columnIndex])
		}

		if (columnIndex - 1 >= 0 && grid[rowIndex][columnIndex - 1] === 1) {
			grid[rowIndex][columnIndex - 1] = 2
			queue.push([rowIndex, columnIndex - 1])
		}

		if (columnIndex + 1 < columnLength && grid[rowIndex][columnIndex + 1] === 1) {
			grid[rowIndex][columnIndex + 1] = 2
			queue.push([rowIndex, columnIndex + 1])
		}
	}

	return count
}

function orangesRotting(grid: number[][]): number {
	let rowLength = grid.length
	let columnLength = grid[0].length

	let queue = new Queue<[number, number]>()

	let onesPresent = false

	// count the number of 2's in the grid and add them in the queue
	// count of 1's in advance to return -1 incase there are no 2's
	for (let i = 0; i < rowLength; i++) {
		for (let j = 0; j < columnLength; j++) {
			if (grid[i][j] === 2) queue.push([i, j])
			if (grid[i][j] === 1) onesPresent = true
		}
	}

	if (queue.size() === 0) {
		return onesPresent ? -1 : 0
	}

	// add a gap if queue has 2's after every level order iteration
	queue.push([rowLength, columnLength])
	let time = bfs(grid, queue)

	for (let i = 0; i < rowLength; i++) {
		for (let j = 0; j < columnLength; j++) {
			if (grid[i][j] === 1) return -1
		}
	}

	return time
}

// console.log(
// 	orangesRotting([
// 		[2, 1, 1],
// 		[1, 1, 0],
// 		[0, 1, 1],
// 	]),
// )
// console.log(
// 	orangesRotting([
// 		[2, 1, 1],
// 		[0, 1, 1],
// 		[1, 0, 1],
// 	]),
// )
// console.log(orangesRotting([[0, 2]]))
console.log(orangesRotting([[1]]))

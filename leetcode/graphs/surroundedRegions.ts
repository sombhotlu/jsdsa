/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
	let rowLength = board.length,
		columnLength = board[0].length,
		visitedNodesArray: [number, number][] = []

	for (let row = 0; row < rowLength; row++) {
		for (let column = 0; column < columnLength; column++) {
			if (board[row][column] === 'O') {
				if (!isVisited(visitedNodesArray, [row, column])) {
					let makeChangeList = bfs(board, visitedNodesArray, [row, column])
					if (makeChangeList.length) makeChange(board, makeChangeList)
				}
			}
		}
	}
}

function bfs(
	board: string[][],
	visitedNodesArray: [number, number][],
	startingNode: [number, number],
): [number, number][] {
	let makeChangeList: [number, number][] = [startingNode],
		adjacencyQueue = [startingNode],
		edge_O_node = false

	while (adjacencyQueue.length) {
		let node = adjacencyQueue.shift()

		if (!node) continue
		visitedNodesArray.push(startingNode)

		let [row, column] = node!

		if (
			board?.[row - 1]?.[column] == undefined ||
			board?.[row]?.[column + 1] == undefined ||
			board?.[row + 1]?.[column] == undefined ||
			board?.[row]?.[column - 1] == undefined
		)
			edge_O_node = true

		if (
			board?.[row - 1]?.[column] === 'O' &&
			!isVisited(visitedNodesArray, [row - 1, column])
		) {
			adjacencyQueue.push([row - 1, column])
			makeChangeList.push([row - 1, column])
			visitedNodesArray.push([row - 1, column])
		}

		if (
			board?.[row]?.[column + 1] === 'O' &&
			!isVisited(visitedNodesArray, [row, column + 1])
		) {
			adjacencyQueue.push([row, column + 1])
			makeChangeList.push([row, column + 1])
			visitedNodesArray.push([row, column + 1])
		}

		if (
			board?.[row + 1]?.[column] === 'O' &&
			!isVisited(visitedNodesArray, [row + 1, column])
		) {
			adjacencyQueue.push([row + 1, column])
			makeChangeList.push([row + 1, column])
			visitedNodesArray.push([row + 1, column])
		}

		if (
			board?.[row]?.[column - 1] === 'O' &&
			!isVisited(visitedNodesArray, [row, column - 1])
		) {
			adjacencyQueue.push([row, column - 1])
			makeChangeList.push([row, column - 1])
			visitedNodesArray.push([row, column - 1])
		}
	}

	if (!edge_O_node) return makeChangeList
	return []
}

function isVisited(visitedArray: [number, number][], node: [number, number]) {
	return visitedArray.some(
		(visitedNode: [number, number]) => visitedNode[0] === node[0] && visitedNode[1] === node[1],
	)
}

function makeChange(board: string[][], zeroNodesVisitedList: [number, number][]) {
	zeroNodesVisitedList.forEach((visited) => {
		board[visited[0]][visited[1]] = 'X'
	})
}

/*

    BFS on the nodes which are 'O'
        if the resultant position of BFS is same as the position of 'O' then don't flip
        else if we get a list of 'O' as a response then 
                loop over them and flip it.



    What we do in BFS ? 
    We fist keep a adjacency list & a visited List

*/

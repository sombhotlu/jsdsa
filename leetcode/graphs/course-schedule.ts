function canFinish(numCourses: number, prerequisites: number[][]): boolean {
	// create a adjacency list
	let adjacencyList: Array<Array<number>> = new Array(numCourses).fill(0).map((_) => new Array())

	for (let [c1, c2] of prerequisites) {
		adjacencyList[c2].push(c1)
		if (adjacencyList[c1].includes(c2)) {
			return false
		}
	}

	let visitedList: boolean[] = new Array(numCourses).fill(false)
	let pathVisitedList: boolean[] = new Array(numCourses).fill(false)

	function bfs(course: number): boolean {
		visitedList[course] = true
		pathVisitedList[course] = true

		for (let neighbor of adjacencyList[course]) {
			if (!visitedList[neighbor]) {
				if (bfs(neighbor)) return true
			} else if (pathVisitedList[neighbor]) return true
		}

		pathVisitedList[course] = false
		return false
	}

	for (let i = 0; i < numCourses; i++) {
		if (!visitedList[i]) if (bfs(i) === true) return false
	}
	return true
}

console.log(
	canFinish(3, [
		[1, 0],
		[0, 2],
		[2, 1],
	]),
)

console.log(
	canFinish(5, [
		[1, 4],
		[2, 4],
		[3, 1],
		[3, 2],
	]),
)

/* 
    Algorithm
    We are gonna use DFS to detect cycles in the graph

    If we reach a node thats already present in the stack then there is a cycle in the graph


    For DFS, we need to have an adjacency list  
    a visited Nodes list & a stack


    here since the values are numbers the the visited nodes list would be a nuber 

*/

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
	// create a adjacency list
	let adjacencyList: Array<Array<number>> = new Array(numCourses).fill(0).map((_) => new Array())
	let indegreeNodes: Array<number> = new Array(numCourses).fill(0)

	for (let [c1, c2] of prerequisites) {
		adjacencyList[c2].push(c1)
		indegreeNodes[c1]++
	}

	let queue: number[] = []
	let result: number[] = []

	for (let i = 0; i < numCourses; i++) {
		if (indegreeNodes[i] === 0) {
			queue.unshift(i)
			indegreeNodes[i] = -1
		}
	}

	while (queue.length) {
		let node = queue.pop()!
		result.push(node)
		for (let neighbor of adjacencyList[node]) {
			indegreeNodes[neighbor]--
			if (indegreeNodes[neighbor] === 0) queue.unshift(neighbor)
		}
	}

	if (result.length === numCourses) return result
	return []
}

console.log(
	canFinish(3, [
		[1, 0],
		[0, 2],
		[2, 1],
	]),
)

export {}

/* 
    Algorithm
    To do the course schedule we will use Topological sort

	In this, Topological sort we use a BFS approach
	while creating the adjacency list, create indegree nodes as well.

	find the nodes which has inDegree as zero and push it to queue

	while(queue is not empty) {
		get the first node in the queue
		push it in the result array
		loop over its neighbours and reduce its inorders of neighbors
		if the inorder value of that neighbour is 0 then push it in queue
		
	}

	if result.length == numberofCourses then toposort is fine
	
*/

/* 
    Algo:
    Start with the first item in the adjacency list, and create an visited object with vertices as their keys and values will be boolean values

*/

class Graph {
	public adjacencyList: {
		[K: string]: string[]
	}
	constructor() {
		this.adjacencyList = {}
	}
	addVertex(vertex: string) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
	}
	addEdge(v1: string, v2: string) {
		this.adjacencyList[v1].push(v2)
		this.adjacencyList[v2].push(v1)
	}
	removeEdge(vertex1: string, vertex2: string) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2)
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1)
	}
	removeVertex(vertex: string) {
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].length
				? this.adjacencyList[vertex].pop()
				: null
			if (adjacentVertex) this.removeEdge(vertex, adjacentVertex)
		}
		delete this.adjacencyList[vertex]
	}
}

let graph1 = new Graph()

graph1.addVertex('A')
graph1.addVertex('B')
graph1.addVertex('C')
graph1.addVertex('D')
graph1.addVertex('E')
graph1.addVertex('F')

graph1.addEdge('A', 'B')
graph1.addEdge('A', 'C')
graph1.addEdge('B', 'D')
graph1.addEdge('C', 'E')
graph1.addEdge('D', 'E')
graph1.addEdge('D', 'F')

console.log(graph1.adjacencyList.A)

function dfs(
	adjacencyList: {
		[K: string]: string[]
	},
	vertex: keyof typeof adjacencyList,
) {
	let list: (typeof vertex)[] = []
	let visitedObj: {
		[K: typeof vertex]: boolean
	} = {}

	;(function traverseGraph(v: typeof vertex) {
		if (visitedObj[v]) return
		else visitedObj[v] = true

		list.push(v)

		adjacencyList[v].forEach((neighbour) => {
			if (!visitedObj[neighbour]) return traverseGraph(neighbour)
		})
	})(vertex)

	return list
}

console.log(dfs(graph1.adjacencyList, 'A'))

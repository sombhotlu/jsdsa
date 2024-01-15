let graph = {
	A: ['B', 'C'],
	B: ['A', 'D'],
	C: ['A', 'E'],
	D: ['B', 'C', 'F'],
	E: ['C', 'D', 'F'],
	F: ['D', 'E'],
}

function dfs(graph: Record<string, string[]>, node: keyof typeof graph) {
	let traversedList: string[] = [],
		visited: Record<typeof node, boolean> = {}

	function helper(vertex: typeof node) {
		if (!graph[vertex]?.length) return

		if (!visited[vertex]) visited[vertex] = true
		traversedList.push(vertex)

		for (let val of graph[vertex]) {
			if (!visited[val]) helper(val)
		}
	}

	helper(node)

	return traversedList
}

console.log(dfs(graph, 'A'))

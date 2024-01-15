function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
	let adjacencyList: Record<string, Array<[string, number]>> = {}

	for (let i = 0; i < equations.length; i++) {
		let [src, target] = equations[i]
		if (!adjacencyList[src]) {
			adjacencyList[src] = [[target, values[i]]]
		} else adjacencyList[src].push([target, values[i]])

		if (!adjacencyList[target]) adjacencyList[target] = [[src, 1 / values[i]]]
		else adjacencyList[target].push([src, 1 / values[i]])
	}

	function bfs(src: string, target: string): number {
		let queue: Array<[string, number]> = [[src, 1]]
		let visitedNodes = [src]
		while (queue.length) {
			let [nodeTillNode, weightTillNow] = queue.shift()!
			for (let [neighbourNode, weightTillThat] of adjacencyList[nodeTillNode]) {
				if (neighbourNode === target) return weightTillNow * weightTillThat
				if (!nodes.includes(neighbourNode)) continue
				if (!visitedNodes.includes(neighbourNode)) {
					queue.push([neighbourNode, weightTillNow * weightTillThat])
					visitedNodes.push(neighbourNode)
				}
			}
		}

		return -1
	}

	let nodes = Object.keys(adjacencyList)
	let result: number[] = []
	for (const query of queries) {
		let [sourceNode, targetNode] = query
		if (!nodes.includes(sourceNode) || !nodes.includes(targetNode)) {
			result.push(-1)
			continue
		}

		if (sourceNode === targetNode) {
			result.push(1)
			continue
		}

		result.push(bfs(sourceNode, targetNode))
	}

	return result
}

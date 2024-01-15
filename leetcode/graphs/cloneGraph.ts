/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

class Node {
	val: number
	neighbors: Node[]
	constructor(val?: number, neighbors?: Node[]) {
		this.val = val === undefined ? 0 : val
		this.neighbors = neighbors === undefined ? [] : neighbors
	}
}

function cloneGraph(node: Node | null): Node | null {
	if (!node) return null

	let visitedNodeList: Node[] = []
	let toBeVisitedNodeList: Node[] = [node]
	let createdNodeList: Node[] = []

	let startingNode: Node | null = new Node(node.val)
	toBeVisitedNodeList.push(node)
	createdNodeList.push(startingNode)

	createCloneGraph(toBeVisitedNodeList, visitedNodeList, createdNodeList)

	return startingNode
}

function createCloneGraph(
	toBeVisitedNodeList: Node[],
	visitedNodeList: Node[],
	createdNodeList: Node[],
) {
	// if (visitedNodeList.includes(startingNode)) {
	// 	let neighbors = startingNode.neighbors
	// 	let allNeighborsVisited = true
	// 	for (let neighbor of neighbors) {
	// 		allNeighborsVisited = allNeighborsVisited && visitedNodeList.includes(neighbor)
	// 	}

	// 	if (allNeighborsVisited) return allNeighborsVisited
	// }

	while (toBeVisitedNodeList.length) {
		let originalNode = toBeVisitedNodeList.shift()
		if (!originalNode) return

		let newNode = createdNodeList.find((node) => node.val === originalNode!.val)
		if (!newNode) newNode = new Node(originalNode.val)

		for (let originalNeighbor of originalNode.neighbors) {
			if (visitedNodeList.find((node) => node.val === originalNeighbor.val)) continue

			let newNeighbor = createdNodeList.find((node) => node.val === originalNeighbor.val)
			if (!newNeighbor) {
				newNeighbor = new Node(originalNeighbor.val)
				createdNodeList.push(newNeighbor)
				toBeVisitedNodeList.push(originalNeighbor)
			}

			addNeighbours(newNode, newNeighbor)
		}

		visitedNodeList.push(newNode)
	}
}

function addNeighbours(node1: Node, node2: Node) {
	node1.neighbors.push(node2)
	node2.neighbors.push(node1)
}

export {}
/*
    create a visited list, we put all the original node in there.
    if there node that we are visiting is not present there then we create the node



*/

// Main question, how will we determine the loop ?

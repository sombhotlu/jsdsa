class Node {
	val: boolean
	isLeaf: boolean
	topLeft: Node | null
	topRight: Node | null
	bottomLeft: Node | null
	bottomRight: Node | null
	constructor(
		val?: boolean,
		isLeaf?: boolean,
		topLeft?: Node,
		topRight?: Node,
		bottomLeft?: Node,
		bottomRight?: Node,
	) {
		this.val = val === undefined ? false : val
		this.isLeaf = isLeaf === undefined ? false : isLeaf
		this.topLeft = topLeft === undefined ? null : topLeft
		this.topRight = topRight === undefined ? null : topRight
		this.bottomLeft = bottomLeft === undefined ? null : bottomLeft
		this.bottomRight = bottomRight === undefined ? null : bottomRight
	}
}

function construct(grid: number[][]): Node | null {
	let rowLength = grid.length,
		columnLength = grid[0].length

	function createNode(
		startRowIndex: number,
		endRowIndex: number,
		startColumnIndex: number,
		endColumnIndex: number,
	): Node | null {
		if (endRowIndex - startRowIndex === 1 && endColumnIndex - startColumnIndex === 1) {
			return new Node(!!grid[startRowIndex][startColumnIndex], true)
		}

		let root = new Node()
		root.topLeft = createNode(
			startRowIndex,
			endRowIndex - (endRowIndex - startRowIndex) / 2,
			startColumnIndex,
			endColumnIndex - (endColumnIndex - startColumnIndex) / 2,
		)
		root.topRight = createNode(
			startRowIndex,
			endRowIndex - (endRowIndex - startRowIndex) / 2,
			endColumnIndex - (endColumnIndex - startColumnIndex) / 2,
			endColumnIndex,
		)
		root.bottomLeft = createNode(
			endRowIndex - (endRowIndex - startRowIndex) / 2,
			endRowIndex,
			startColumnIndex,
			endColumnIndex - (endColumnIndex - startColumnIndex) / 2,
		)
		root.bottomRight = createNode(
			endRowIndex - (endRowIndex - startRowIndex) / 2,
			endRowIndex,
			endColumnIndex - (endColumnIndex - startColumnIndex) / 2,
			endColumnIndex,
		)

		let allTrue =
			root.topLeft?.val &&
			root.topLeft?.isLeaf &&
			root.topRight?.val &&
			root.topRight?.isLeaf &&
			root.bottomLeft?.val &&
			root.bottomLeft?.isLeaf &&
			root.bottomRight?.val &&
			root.bottomLeft?.isLeaf

		let allFalse =
			root.topLeft?.val || root.topRight?.val || root.bottomLeft?.val || root.bottomRight?.val

		if (allTrue || !allFalse) {
			root.val = !!root.topLeft!.val
			root.isLeaf = true
			root.topLeft = null
			root.topRight = null
			root.bottomLeft = null
			root.bottomRight = null
		} else {
			root.val = true
			root.isLeaf = false
		}

		return root
	}

	return createNode(0, rowLength, 0, columnLength)
}

// console.log(
// 	construct([
// 		[0, 1],
// 		[1, 0],
// 	]),
// )
// console.log(
// 	construct([
// 		[0, 0, 0, 0],
// 		[0, 0, 0, 0],
// 		[1, 1, 1, 1],
// 		[1, 1, 1, 1],
// 	]),
// )
console.log(
	construct([
		[1, 1, 0, 0],
		[0, 0, 1, 1],
		[1, 1, 0, 0],
		[0, 0, 1, 1],
	]),
)
// console.log(
// 	construct([
// 		[1, 1, 1, 1, 0, 0, 0, 0],
// 		[1, 1, 1, 1, 0, 0, 0, 0],
// 		[1, 1, 1, 1, 1, 1, 1, 1],
// 		[1, 1, 1, 1, 1, 1, 1, 1],
// 		[1, 1, 1, 1, 0, 0, 0, 0],
// 		[1, 1, 1, 1, 0, 0, 0, 0],
// 		[1, 1, 1, 1, 0, 0, 0, 0],
// 		[1, 1, 1, 1, 0, 0, 0, 0],
// 	]),
// )

export {}

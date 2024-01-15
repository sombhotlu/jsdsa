// import {Trie} from './implement-trie'

class TrieNode {
	public children: Record<string, TrieNode>
	public isEndOfWord: boolean
	constructor() {
		this.children = {}
		this.isEndOfWord = false
	}
}

class Trie {
	public root: TrieNode
	constructor() {
		this.root = new TrieNode()
	}

	insert(word: string): void {
		let currentNode = this.root
		for (let char of word) {
			if (currentNode.children[char] === undefined) {
				currentNode.children[char] = new TrieNode()
			}
			currentNode = currentNode.children[char]
		}
		currentNode.isEndOfWord = true
	}
}

function findWords(board: string[][], words: string[]): string[] {
	let ROW_LENGTH = board.length,
		COLUMN_LENGTH = board[0].length

	let result = new Set<string>()

	// add in it in the Trie Node
	let trie = new Trie()
	for (let word of words) {
		trie.insert(word)
	}

	function findRestCharsOfWord(
		rowIndex: number,
		columnIndex: number,
		trieNode: TrieNode,
		initialString: string,
	) {
		if (
			rowIndex < 0 ||
			columnIndex < 0 ||
			rowIndex == ROW_LENGTH ||
			columnIndex === COLUMN_LENGTH ||
			board[rowIndex][columnIndex] === '#' ||
			!trieNode.children[board[rowIndex][columnIndex]]
		)
			return

		let currentChar = board[rowIndex][columnIndex]
		initialString += currentChar
		let node = trieNode.children[currentChar]
		if (node.isEndOfWord) result.add(initialString)

		board[rowIndex][columnIndex] = '#'

		findRestCharsOfWord(rowIndex - 1, columnIndex, node, initialString)
		findRestCharsOfWord(rowIndex + 1, columnIndex, node, initialString)
		findRestCharsOfWord(rowIndex, columnIndex - 1, node, initialString)
		findRestCharsOfWord(rowIndex, columnIndex + 1, node, initialString)

		board[rowIndex][columnIndex] = currentChar
	}

	for (let i = 0; i < ROW_LENGTH; i++) {
		for (let j = 0; j < COLUMN_LENGTH; j++) {
			findRestCharsOfWord(i, j, trie.root, '')
		}
	}

	return Array.from(result)
}

console.log(
	findWords(
		[
			['o', 'a', 'b', 'n'],
			['o', 't', 'a', 'e'],
			['a', 'h', 'k', 'r'],
			['a', 'f', 'l', 'v'],
		],
		['oa', 'oaa'],
	),
)

export {}

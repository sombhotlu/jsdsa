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
		let childNode: TrieNode | undefined
		for (let char of word) {
			childNode = currentNode.children[char]
			if (childNode === undefined) {
				currentNode.children[char] = new TrieNode()
			}
			currentNode = currentNode.children[char]
		}
		currentNode.isEndOfWord = true
	}

	search(word: string): boolean {
		let currentNode = this.root
		let childNode: TrieNode | undefined
		for (let char of word) {
			childNode = currentNode.children[char]
			if (childNode === undefined) return false
			currentNode = childNode
		}
		return currentNode.isEndOfWord
	}

	startsWith(prefix: string): boolean {
		let currentNode = this.root
		let childNode: TrieNode | undefined
		for (let char of prefix) {
			childNode = currentNode.children[char]
			if (!childNode) return false
			currentNode = childNode
		}
		return true
	}
}

let obj = new Trie()
obj.insert('hello')
console.log(obj.search('hello'))
console.log(obj.startsWith('h'))
// console.log(obj.search('hellos'))

export {Trie}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class TrieNode {
	public children: Record<string, TrieNode>
	public isEndOfWord: boolean
	constructor() {
		this.children = {}
		this.isEndOfWord = false
	}
}

class WordDictionary {
	public root: TrieNode
	constructor() {
		this.root = new TrieNode()
	}

	addWord(word: string): void {
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

	search(word: string, node?: TrieNode): boolean {
		let currentNode = node ?? this.root
		let childNode: TrieNode | undefined
		for (let i = 0; i < word.length; i++) {
			if (word[i] === '.') {
				let keys = Object.keys(currentNode.children)
				if (keys.length === 0) return false
				for (let key of keys) {
					let val = this.search(word.slice(i + 1), currentNode.children[key])
					if (val) return val
				}
				return false
			} else {
				childNode = currentNode.children[word[i]]
				if (!childNode) return false
				if (childNode) currentNode = childNode
			}
		}
		return currentNode.isEndOfWord
	}
}

let wordDictionary = new WordDictionary()

wordDictionary.addWord('a')
wordDictionary.addWord('zab')
wordDictionary.addWord('ab')
wordDictionary.addWord('abbc')
console.log(wordDictionary.search('.a.'))
// console.log(wordDictionary.search('.'))
// console.log(wordDictionary.search('a'))
// console.log(wordDictionary.search('a'))
// console.log(wordDictionary.search('aa'))
// wordDictionary.addWord('aa')

/* 
    Solve for 2 issues
    1. Length should not be more than max length
    2. if search is less value and not end word exists then return false

*/

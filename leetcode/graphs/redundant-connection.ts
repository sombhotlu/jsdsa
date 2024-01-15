function findRedundantConnection(edges: number[][]): number[] {
	let rank = new Array(edges.length + 1).fill(1)
	let parent = rank.map((val, i) => i * val)

	for (let [v1, v2] of edges) {
		let result = union(v1, v2)
		if (!result) return [v1, v2]
	}
	return edges[edges.length - 1]

	function find(vertex: number): number {
		let result = parent[vertex]

		while (result !== parent[result]) {
			parent[result] = parent[parent[result]]
			result = parent[result]
		}

		return result
	}

	function union(v1: number, v2: number): boolean {
		let [p1, p2] = [find(v1), find(v2)]

		if (p1 === p2) return false

		if (rank[p2] > rank[p1]) {
			rank[p2] += rank[p1]
			parent[p1] = p2
		} else {
			rank[p1] += rank[p2]
			parent[p2] = p1
		}

		return true
	}
}

// console.log(
// 	findRedundantConnection([
// 		[1, 2],
// 		[1, 3],
// 		[2, 3],
// 	]),
// )

console.log(
	findRedundantConnection([
		[77, 89],
		[41, 89],
		[21, 92],
		[11, 17],
		[45, 90],
		[57, 81],
		[34, 89],
		[19, 45],
		[29, 74],
		[78, 82],
		[59, 72],
		[51, 63],
		[3, 90],
		[16, 46],
		[49, 91],
		[42, 79],
		[7, 66],
		[45, 67],
		[7, 72],
		[33, 65],
		[8, 64],
		[10, 56],
		[54, 92],
		[26, 43],
		[40, 88],
		[31, 75],
		[30, 75],
		[5, 23],
		[20, 61],
		[22, 45],
		[7, 22],
		[2, 27],
		[36, 56],
		[35, 91],
		[23, 80],
		[12, 73],
		[10, 68],
		[61, 83],
		[35, 68],
		[76, 100],
		[20, 37],
		[25, 100],
		[11, 84],
		[22, 40],
		[18, 34],
		[57, 60],
		[12, 28],
		[18, 42],
		[32, 71],
		[43, 53],
		[92, 98],
		[1, 43],
		[5, 81],
		[10, 52],
		[11, 48],
		[84, 85],
		[29, 59],
		[95, 100],
		[9, 44],
		[65, 96],
		[12, 25],
		[33, 38],
		[93, 97],
		[8, 49],
		[50, 100],
		[6, 38],
		[1, 24],
		[23, 79],
		[9, 99],
		[27, 98],
		[2, 8],
		[33, 99],
		[1, 55],
		[17, 51],
		[9, 62],
		[56, 71],
		[47, 48],
		[1, 50],
		[23, 94],
		[44, 79],
		[32, 97],
		[39, 95],
		[38, 86],
		[21, 25],
		[61, 70],
		[58, 97],
		[75, 85],
		[13, 78],
		[63, 78],
		[13, 69],
		[3, 26],
		[4, 47],
		[28, 31],
		[79, 87],
		[1, 14],
		[46, 97],
		[82, 98],
		[18, 88],
		[15, 56],
		[37, 54],
	]),
)

// console.log(
// 	findRedundantConnection([
// 		[1, 2],
// 		[2, 3],
// 		[3, 4],
// 		[1, 4],
// 		[1, 5],
// 	]),
// )

/* 
    We will use union find graph algorithm to solve this problem

    For Union Find, we use
    Parent Array initialsed to itself 
    Rank Array all marked as one to the length of the array


    We loop over the edges list
    call the union function with 2 vertices of the edge
    the union function will call the find method twice of each of the vertices

    Find method find the parent of the vertex 
    by checking the parent array
    it continues to check the parent until itself parent is itself
    and returns that value

    if the roots consider p1 & p2 for the vertices are same then we get the redundant edge

    else we modify the ranks and parent array

    if ranks[p2] > ranks[p1]
    ranks[p2] += ranks[p1]
    parent[p1] = p2
    else
    ranks[p1] += ranks[p2]
    parent[p2] = p1

    



*/

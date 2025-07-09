import { Queue } from "@datastructures-js/queue"

function bfs(image: number[][], queue: Queue<[number, number]>, oldColor: number, newColor: number) {
    let rowLength = image.length
    let columnLength = image[0].length

    while (!queue.isEmpty()) {
        let [rowIndex, columnIndex] = queue.dequeue()
        image[rowIndex][columnIndex] = newColor

        if (rowIndex - 1 >= 0 && image[rowIndex -1][columnIndex] === oldColor)
            queue.push([rowIndex - 1, columnIndex])
        
        if (rowIndex + 1 < rowLength && image[rowIndex + 1][columnIndex] === oldColor)
            queue.push([rowIndex + 1, columnIndex])
        
        if (columnIndex - 1 >= 0 && image[rowIndex][columnIndex -1] === oldColor)
            queue.push([rowIndex, columnIndex-1 ])
        
        if (columnIndex + 1 < columnLength && image[rowIndex][columnIndex+ 1] === oldColor)
            queue.push([rowIndex, columnIndex + 1])
        
    }
        
}


function floodFill(image: number[][], sr: number, sc: number, color: number) {
    let queue = new Queue<[number, number]>()

    let oldColor = image[sr][sc]
    queue.push([sr, sc])

    if (oldColor === color)
        return image

    bfs(image, queue, oldColor, color)
    
    return image
}




console.log(
	floodFill([
		[1, 1, 1],
		[1, 1, 0],
		[1, 0, 1],
	], 1,1,2),
)
console.log(
	floodFill(
		[
			[0, 0, 0],
			[0, 0, 0],
		], 0,0,0
	),
)
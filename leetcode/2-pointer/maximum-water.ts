function maxArea(height: number[]): number {
	let i = 0,
		j = height.length - 1,
		maxArea = 0

	while (i <= j) {
		maxArea = Math.max(maxArea, (j - i) * Math.min(height[i], height[j]))

		if (height[i] < height[j]) {
			i++
		} else if (height[i] > height[j]) {
			j--
		} else {
			i++
			j--
		}
	}

	return maxArea
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

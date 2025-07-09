/* 
    

*/

function maxProfit(prices: number[]): number {
	let currentMin = prices[0],
		maxProfit = 0

	for (let i = 1; i < prices.length; i++) {
		if (Math.max(prices[i], currentMin) === currentMin) {
			currentMin = prices[i]
			continue
		}

		maxProfit = Math.max(maxProfit, prices[i] - currentMin)
	}

	return maxProfit
}

console.log(maxProfit([7, 3, 5, 4, 10, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))

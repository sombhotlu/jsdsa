/* 
    I. buy and if next if is lower value discard earlier buy and buy this one
    II. after you bought don't sell until no next high.

*/

function maxProfit(prices: number[]): number {
	let currentHigh = 0,
		profit = 0,
		buyValue = prices[0]

	for (let i = 1; i < prices.length; i++) {
		if (prices[i] <= buyValue) {
			if (currentHigh) {
				profit += currentHigh - buyValue
				currentHigh = 0
			}

			buyValue = prices[i]
		} else if (prices[i] > buyValue) {
			if (prices[i] > currentHigh) currentHigh = prices[i]
			else {
				profit += currentHigh - buyValue
				currentHigh = 0
				buyValue = prices[i]
			}
		}
	}

	if (currentHigh) profit += currentHigh - buyValue

	return profit
}

// console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 7
// console.log(maxProfit([1, 2, 3, 4, 5])) // 4
// console.log(maxProfit([7, 6, 4, 3, 1])) // 0
// console.log(maxProfit([4, 5, 6, 1, 3, 2])) // 4
console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0])) // 15

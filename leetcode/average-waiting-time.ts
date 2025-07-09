function averageWaitingTime(customers: number[][]): number {
	let waitTime = 0
	let timeTillNow = 0

	for (let customer of customers) {
		if (timeTillNow < customer[0]) {
			waitTime += customer[1]
			timeTillNow = customer[0] + customer[1]
			continue
		}
		timeTillNow += customer[1]
		waitTime += timeTillNow - customer[0]
	}

	return waitTime / customers.length
}

console.log(
	averageWaitingTime([
		[5, 2],
		[5, 4],
		[10, 3],
		[20, 1],
	]),
)
console.log(
	averageWaitingTime([
		[1, 2],
		[2, 5],
		[4, 3],
	]),
)

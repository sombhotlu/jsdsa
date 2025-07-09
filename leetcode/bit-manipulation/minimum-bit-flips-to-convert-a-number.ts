function minBitFlips(start: number, goal: number): number {
    let num = start ^ goal
    let count = 0
    while (num) {
        count += (num & 1)
        num >>= 1
    }
    return count
}


console.log(minBitFlips(10,7))
console.log(minBitFlips(3,4))